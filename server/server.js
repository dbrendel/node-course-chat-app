const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
var port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
	console.log('New user connected');

	socket.emit('newMessage', {
		from: 'UserOne',
		text: 'This is a sample message',
		createdAt: 123456789
	});

	socket.on('createMessage', (message) => {
		message.createdAt = new Date().toString();
		console.log('Created message', message);
	});

	socket.on('disconnect', () => {
		console.log(('User was disconnected'));
	});
});

server.listen(port, () => {
	console.log(`Server up at port ${port}`);
});
