const path = require('path')

const homeHandler = (req, res) => {
  res.sendFile(path.join(__dirname, 'views/home.html'))
}

const loginHandler = (req, res) => {
    res.sendFile(path.join(__dirname, 'views/login.html'))
}

module.exports = {
    homeHandler,
    loginHandler
}
