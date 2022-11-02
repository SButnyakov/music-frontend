/**
 * Required modules
 */
const express = require('express');
const cors = require("cors");
const handlers = require('./handlers');

/**
 * App Variables
 */
const app = express();
const port = process.env.PORT || 80;
const corsOptions = {
    origin: "*",
    credentials: true,
    optionsSuccessStatus: 200,
}

app.get('/', handlers.homeHandler);
app.get('/login', handlers.loginHandler);
app.get('/registration', handlers.registrationHandler);
app.get('/script/login.js', handlers.fileLoginHandler)
app.get('/script/registration.js', handlers.fileRegistrationHandler)
app.get('/script/utils.js', handlers.fileUtilsHandler)

app.use(cors(corsOptions))

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
