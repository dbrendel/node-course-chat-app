const expect = require('expect');

var {Users} = require('./users');

describe('User', () => {
	var users;

	beforeEach(() => {
		users = new Users();
		users.users = [{
			id: 'u1',
			name: 'UserOne',
			room: 'Room One'
		}, {
			id: 'u2',
			name: 'UserTwo',
			room: 'Room Two'
		}, {
			id: 'u3',
			name: 'UserThree',
			room: 'Room One'
		}];
	});

	it('should add user', () => {
		var users = new Users();
		var user = {
			id: 'ab123',
			name: 'Donald',
			room: 'Private chat'
		};

		var reUser = users.addUser(user.id, user.name, user.room);

		expect(users.users).toEqual([user]);
	});

	it('should remove user', () => {
		var id = 'u2';
		var user = users.removeUser(id);

		expect(user).toBeTruthy();
		expect(user.id).toBe(id);
		expect(users.users.length).toBe(2);
	});

	it('should not remove user', () => {
		var user = users.removeUser('x2');

		expect(user).toBeFalsy();
		expect(users.users.length).toBe(3);
	});

	it('should get user', () => {
		var id = 'u2';
		var user = users.getUser(id);

		expect(user).toBeTruthy();
		expect(user.id).toBe(id);
	});

	it('should not get user', () => {
		var user = users.getUser('x2');

		expect(user).toBeFalsy();
	});

	it('should return names for room one', () => {
		var userList = users.getUserList('Room One');

		expect(userList).toEqual(['UserOne', 'UserThree']);
	});

	it('should return names for room two', () => {
		var userList = users.getUserList('Room Two');

		expect(userList).toEqual(['UserTwo']);
	});
});
