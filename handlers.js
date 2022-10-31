const path = require("path")

const homeHandler = (req, res) => {
  res.sendFile(path.join(__dirname, "views/home.html"))
}

module.exports = {
  homeHandler
}
