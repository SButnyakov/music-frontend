let form = document.querySelector("form")

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action, true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    xhr.setRequestHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    xhr.setRequestHeader('Access-Control-Allow-Credentials', 'true');
    xhr.withCredentials = true
    let data = {
        "login":`${form.login.value}`,
        "password": `${form.password.value}`
    }
    xhr.send(JSON.stringify(data))
})