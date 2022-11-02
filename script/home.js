const checkCookieData = {
    "auth_cookie": `${getAuthCookie()}`
}

checkCookieRequest(checkCookieData)
.then(answer => {
    switch(answer[1]) {
        case 200:
            let user = answer[0]
            addStageName(user.stage_name)
            break;
        default:
            break;
    }
})

function addStageName(stageName) {
    document.querySelector("h1")
    .insertAdjacentHTML("afterend", `<h2>${stageName}</h2>`)
}
