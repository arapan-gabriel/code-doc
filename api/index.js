const express = require('express');
const bodyParser = require('body-parser');
let { USERS } = require('./users')
const app = express();

app.use(bodyParser.json());

app.get('/users', (req, res) => {
	res.send(200, USERS);
});

app.get('/users/:id', (req, res) => {
	const user = USERS.find(user => {
		return user.id === Number(req.params.id);
	})
	res.send(200, user);
});

app.post('/users', (req, res) => {
	const user = {
		id: Date.now(),
		name: req.body.name
	};
	USERS.push(user);
	res.send(201, user);
});

app.put('/users/:id', (req, res) => {
	const user = USERS.find(user => {
		return user.id === Number(req.params.id);
	})
	user.name = req.body.name;
	res.send(200, user);
});

app.delete('/users/:id', (req, res) => {
	USERS = USERS.filter(user => {
		return user.id !== Number(req.params.id);
	});
	res.send(200);
});

app.listen(3000, () => {
  console.log('app listening on port 3000!');
});