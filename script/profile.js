const splittedURL = window.location.href.split('/')
const id = splittedURL[splittedURL.length - 1]

/**
* 1 часть: Подгрузка пользователя
*/

getUserById(id)
.then(answer => {
    let user = answer[0]
    let code = answer[1]

    switch (code) {
        case 200:
            addStageName(user.stage_name);
            break;
        case 204:
            addStageName("Пользователь не найден")
            break;
        default:
            addStageName("Ошибка запроса")
            break;
    }

    if (getAuthCookie() === user.music_auth_cookie) {
        addSongButton()
    }
})


/**
* 3 часть: Подгрузка песен
*/

/**
* Остальное
*/
// Заглушка
async function saySheesh() {
    console.log('SHEEESH')
    console.log(`${id}`)
}

/**
* Вспомогательные функции
*/
function addStageName(stageName) {
    let element = document.querySelector('.user-stage-name')
    element.textContent = stageName
}

function addSongButton() {
    let element = document.querySelector('.user-stage-name')
    element.insertAdjacentHTML("afterend", `<button class="add-song-button" onclick="saySheesh()">Добавить песню</button>`)
}
