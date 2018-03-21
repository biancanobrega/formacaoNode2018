const express = require('express');
const app = express();

const hostname = '127.0.0.1';
const port = 3000;

// Função callback
app.get('/animais/', function(req, res) {
  res.status(200).send(animais);
});


// Arrow function
app.get('/animal/:id', (req, res) => {
	const id = req.params.id;
	const result = animais.find(animal => animal.id === id);
  res.status(200).send(result);
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

const animais = [
  {
    id: '123',
    name: 'Animal 1'
  },
  {
    id: '1234',
    name: 'Animal 2'
  }
];
