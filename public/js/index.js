var socket = io();

socket.on('connect', function() {
	console.log('Connected to server');
});

socket.on('newMessage', function(message) {
	console.log('New message', message);
	var li = jQuery('<li></li>').text(message.from +': '+ message.text);

	jQuery('#messages').append(li);
});

socket.on('newLocationMessage', function(message) {
	var a = jQuery('<a target="_blank">View current location</a>').attr('href', message.url);
	var li = jQuery('<li></li>').text(`${message.from}: `).append(a);

	jQuery('#messages').append(li);
});

socket.on('disconnect', function() {
	console.log('Disconnect from server');
});

function submitForm(e) {
	e.preventDefault();

	var messageTextbox = jQuery('[name="message"]');

	socket.emit('createMessage', {
		from: 'User',
		text: messageTextbox.val()
	}, function() {
		messageTextbox.val('');
	});
}

jQuery('#message-form').on('submit', submitForm);
jQuery('[name="submit"]').on('click', submitForm);

var locationButton = jQuery('#send-location');
locationButton.on('click', function() {
	if (!navigator.geolocation) {
		return alert('Geolocation not supported by browser');
	}

	locationButton.attr('disabled', 'disabled').text('Sending location...');

	navigator.geolocation.getCurrentPosition(function(position) {
		locationButton.removeAttr('disabled').text('Send location');
		socket.emit('createLocationMessage', {
			latitude: position.coords.latitude,
			longitude: position.coords.longitude
		});
	}, function() {
		locationButton.removeAttr('disabled').text('Send location');
		alert('Unable to fetch location');
	});
});
