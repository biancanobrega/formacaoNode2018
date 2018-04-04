const express = require('express');
const bodyParser = require('body-parser');
const app = express();


module.exports.hostname = '127.0.0.1';
module.exports.port = 9000;

// Utilização do Body-parser para utilizar json nos serviços.
app.use(bodyParser.json());

module.exports.app = app;