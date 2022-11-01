let form = document.querySelector("form")

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let data = {
        "login":`${form.login.value}`,
        "password": `${form.password.value}`
    }
    onFormSubmit(data)
    .then(answer => {
        if (answer[1] === 200) {
            window.location.replace("http://localhost:80/")
        } else if (answer[1] === 400) {
            document.querySelector("h1")
            .insertAdjacentHTML("afterend", "<p style=\"color: red\">Bad Request</p>")
        } else if (answer[1] === 401) {
            document.querySelector("h1")
            .insertAdjacentHTML("afterend", "<p style=\"color: red\">Unauthorized</p>")
        } else if (answer[1] === 422) {
            document.querySelector("h1")
            .insertAdjacentHTML("afterend", "<p style=\"color: red\">Unprocessable Entity</p>")
        } else if (answer[1] === 500) {
            document.querySelector("h1")
            .insertAdjacentHTML("afterend", "<p style=\"color: red\">Internal Server Error</p>")
        }
    })
})

async function onFormSubmit(data) {
    let response = await fetch(form.action, {
        method: form.method,
        body: JSON.stringify(data),
        mode: 'cors',
        headers: new Headers({
            'Content-Type': 'application/json; charset=UTF-8',
            'Access-Control-Allow-Origin': 'http://localhost:8080',
            'Access-Control-Allow-Credentials': 'true'
        }),
        credentials: 'include',
    });
    let answer = await response.json()
    let code = response.status
    return [answer, code]
}
