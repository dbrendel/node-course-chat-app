const expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
	it('should generate correct message object', () => {
		var from = 'Test', text = 'This is a tes message';
		var messageObject = generateMessage(from, text);

		expect(messageObject.from).toBe(from);
		expect(messageObject.text).toBe(text);
		expect(typeof messageObject.createdAt).toBe('number');
	});
});
