const expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
	it('should generate correct message object', () => {
		var from = 'Test', text = 'This is a tes message';
		var messageObject = generateMessage(from, text);

		expect(messageObject.from).toBe(from);
		expect(messageObject.text).toBe(text);
		expect(typeof messageObject.createdAt).toBe('number');
	});
});

describe('generateLocationMessage', () => {
	it('should generate correct location message object', () => {
		var from = 'Test', latitude = 12.34, longitude = 45.67;
		var messageObject = generateLocationMessage(from, latitude, longitude);

		expect(messageObject.from).toBe(from);
		expect(messageObject.url).toBe(`https://www.google.com/maps?q=${latitude},${longitude}`);
		expect(typeof messageObject.createdAt).toBe('number');
	});
});
