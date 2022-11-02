const splittedURL = window.location.href.split('/')
const id = splittedURL[splittedURL.length - 1]


/**
* 1 часть: Проверка куки
*/


/**
* 2 часть: Подгрузка пользователя
*/
getUserById(id)
.then(answer => {
    switch (answer[1]) {
        case 200:
            let user = answer[0];
            addStageName(user.stage_name);
            break;
        case 204:
            addStageName("Пользователь не найден")
            break;
        default:
            addStageName("Ошибка запроса")
            break;
    }

})


/**
* 3 часть: Подгрузка песен
*/


/**
* Вспомогательные функции
*/
function addStageName(stageName) {
    let element = document.querySelector('.user-stage-name')
    element.textContent = stageName

}
