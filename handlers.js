import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class Handlers {
    static homeHandler = (req, res) => {
        res.sendFile(path.join(__dirname, 'views/home.html'));
    }

    static loginHandler = (req, res) => {
        res.sendFile(path.join(__dirname, 'views/login.html'))
    }

    static registrationHandler = (req, res) => {
        res.sendFile(path.join(__dirname, 'views/registration.html'))
    }

    static fileHomeHandler = (req, res) => {
        res.sendFile(path.join(__dirname, 'script', 'home.js'))
    }

    static fileLoginHandler = (req, res) => {
        res.sendFile(path.join(__dirname, 'script', 'login.js'))
    }

    static fileRegistrationHandler = (req, res) => {
        res.sendFile(path.join(__dirname, 'script', 'registration.js'))
    }

    static fileUtilsHandler = (req, res) => {
        res.sendFile(path.join(__dirname, 'script', 'utils.js'))
    }
}

export default Handlers;
