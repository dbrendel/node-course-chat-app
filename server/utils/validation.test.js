const expect = require('expect');

var {isRealString} = require('./validation');

describe('isRealString', () => {
	it('should reject non-string value', () => {
		var res = isRealString(78);

		expect(res).toBeFalsy();
	});

	it('should reject string with only spaces', () => {
		var res = isRealString('       ');

		expect(res).toBeFalsy();
	});

	it('should allow string with non-space characters', () => {
		var res = isRealString('   has some value   ');

		expect(res).toBeTruthy();
	});
});
