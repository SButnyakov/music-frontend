let form = document.querySelector("form")

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let data = {
        "login":`${form.login.value}`,
        "password": `${form.password.value}`,
        "stage_name": `${form.stage_name.value}`
    }
    onFormSubmit(data)
    .then(answer => {
        switch (answer[1]) {
            case 201:
                window.location.replace("http://localhost:80/login");
                break;
            case 400:
                addErrorMessage("Bad Request");
                break;
            case 422:
                addErrorMessage("Unprocessable Entity")
                break;
            default:
                addErrorMessage("Something went wrong...")
        }
    })
})

function addErrorMessage(errorText) {
    document.querySelector("h1")
    .insertAdjacentHTML("afterend", `<p style=\"color: red\">${errorText}</p>`)
}