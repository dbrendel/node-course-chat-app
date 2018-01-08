var socket = io();

socket.on('connect', function() {
	console.log('Connected to server');

	socket.emit('createMessage', {
		from: 'Myself',
		text: 'This is a new message'
	});
});

socket.on('newMessage', function(message) {
	console.log('New message', message);
});

socket.on('disconnect', function() {
	console.log('Disconnect from server');
});
