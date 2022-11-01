let form = document.querySelector("form")

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let data = {
        "login":`${form.login.value}`,
        "password": `${form.password.value}`
    }
    onFormSubmit(data)
    .then(answer => {
        switch (answer[1]) {
            case 200:
                window.location.replace("http://localhost:80/");
                break;
            case 201:
                window.location.replace("http://localhost:80/login");
            case 400:
                addErrorMessage("Bad Request");
                break;
            case 401:
                addErrorMessage("Unauthorized");
                break;
            case 422:
                addErrorMessage("Unprocessable Entity")
                break;
            case 500:
                addErrorMessage("Internal Server Error")
                break;
            default:
                addErrorMessage("Something went wrong...")
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

function addErrorMessage(errorText) {
    document.querySelector("h1")
    .insertAdjacentHTML("afterend", `<p style=\"color: red\">${errorText}</p>`)
}
