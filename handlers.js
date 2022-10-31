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

const fileFunctionsHandler = (req, res) => {
    res.sendFile(path.join(__dirname, 'script', 'functions.js'))
}

module.exports = {
    homeHandler,
    loginHandler,
    registrationHandler,
    fileFunctionsHandler
}
