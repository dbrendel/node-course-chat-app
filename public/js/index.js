var socket = io();

socket.on('connect', function() {
	console.log('Connected to server');
});

socket.on('newMessage', function(message) {
	console.log('New message', message);
	var li = jQuery('<li></li>').text(message.from +': '+ message.text);

	jQuery('#messages').append(li);
});

socket.on('disconnect', function() {
	console.log('Disconnect from server');
});

function submitForm(e) {
	e.preventDefault();

	socket.emit('createMessage', {
		from: 'User',
		text: jQuery('[name="message"]').val()
	}, function() {

	});
}

jQuery('#message-form').on('submit', submitForm);
jQuery('[name="submit"]').on('click', submitForm);
