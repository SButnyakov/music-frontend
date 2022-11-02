const path = require('path')

const homeHandler = (req, res) => {
  res.sendFile(path.join(__dirname, 'views/home.html'))
}

const loginHandler = (req, res) => {
    res.sendFile(path.join(__dirname, 'views/login.html'))
}

const registrationHandler = (req, res) => {
    res.sendFile(path.join(__dirname, 'views/registration.html'))
}

const fileLoginHandler = (req, res) => {
    res.sendFile(path.join(__dirname, 'script', 'login.js'))
}

const fileRegistrationHandler = (req, res) => {
    res.sendFile(path.join(__dirname, 'script', 'registration.js'))
}

const fileUtilsHandler = (req, res) => {
    res.sendFile(path.join(__dirname, 'script', 'utils.js'))
}

module.exports = {
    homeHandler,
    loginHandler,
    registrationHandler,
    fileLoginHandler,
    fileRegistrationHandler,
    fileUtilsHandler
}
