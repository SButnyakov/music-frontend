const baseURL = "http://localhost:8080"

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
            'Access-Control-Allow-Origin': `${baseURL}`,
            'Access-Control-Allow-Credentials': 'true'
        }),
        credentials: 'include',
    });
    let answer = await response.json()
    let code = response.status
    return [answer, code]
}

async function updateCookie(updateCookieData) {
    let response = await fetch(`${baseURL}/updateCookie`, {
        method: "POST",
        body: JSON.stringify(updateCookieData),
        mode: 'cors',
        headers: new Headers({
            'Content-Type': 'application/json; charset=UTF-8',
            'Access-Control-Allow-Origin': `${baseURL}`,
            'Access-Control-Allow-Credentials': 'true'
        }),
        credentials: 'include',
    })
    return response.status
}

async function checkCookie(checkCookieData) {
    let response = await fetch(`${baseURL}/checkCookie`, {
        method: "POST",
        body: JSON.stringify(checkCookieData),
        mode: 'cors',
        headers: new Headers({
            'Content-Type': 'application/json; charset=UTF-8',
            'Access-Control-Allow-Origin': `${baseURL}`,
            'Access-Control-Allow-Credentials': 'true'
        }),
        credentials: 'include',
    })
    let answer = await response.json()
    let code = response.status
    return [answer, code]
}

async function getUserById(id) {
    let response = await fetch(`${baseURL}/users/${id}`, {
        method: "GET",
        mode: 'cors',
        headers: new Headers({
            'Content-Type': 'application/json; charset=UTF-8',
            'Access-Control-Allow-Origin': `${baseURL}`,
            'Access-Control-Allow-Credentials': 'true'
        }),
        credentials: 'include',
    })
    
    let answer
    let code = response.status

    if (code === 200) {
        answer = await response.json()
        return [answer, code]
    }

    return [null, code]
}
