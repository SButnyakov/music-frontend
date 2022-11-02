function getAuthCookie() {
    return document.cookie
        .split(";")
        .find((row) => row.startsWith("music_auth_cookie="))
        ?.split('=')[1];
}

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

async function updateCookieRequest(updateCookieData) {
    let response = await fetch("http://localhost:8080/updateCookie", {
        method: "POST",
        body: JSON.stringify(updateCookieData),
        mode: 'cors',
        headers: new Headers({
            'Content-Type': 'application/json; charset=UTF-8',
            'Access-Control-Allow-Origin': 'http://localhost:8080',
            'Access-Control-Allow-Credentials': 'true'
        }),
        credentials: 'include',
    })
    return response.status
}

async function checkCookieRequest(checkCookieData) {
    let response = await fetch("http://localhost:8080/checkCookie", {
        method: "POST",
        body: JSON.stringify(checkCookieData),
        mode: 'cors',
        headers: new Headers({
            'Content-Type': 'application/json; charset=UTF-8',
            'Access-Control-Allow-Origin': 'http://localhost:8080',
            'Access-Control-Allow-Credentials': 'true'
        }),
        credentials: 'include',
    })
    let answer = await response.json()
    let code = response.status
    return [answer, code]
}
