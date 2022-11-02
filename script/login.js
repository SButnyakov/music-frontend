let form = document.querySelector("form")

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let loginData = {
        "login":`${form.login.value}`,
        "password": `${form.password.value}`,

    }

    onFormSubmit(loginData)
    .then(answer => {
        switch (answer[1]) {

            case 200:
                let updateData = {
                    "login":`${form.login.value}`,
                    "auth_cookie": `${getAuthCookie()}`,
                }
                updateCookie(updateData)
                .then(code => {
                    if (code === 200) {
                        window.location.replace(`http://localhost:80/users/${answer[0]}`);
                    } else {
                        window.location.replace("http://localhost:80/login");
                    }
                })
                break;
            case 400:
                addErrorMessage("Bad Request");
                break;
            case 401:
                addErrorMessage("Unauthorized");
                break;
            case 500:
                addErrorMessage("Internal Server Error")
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
