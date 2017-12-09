import chai from 'chai';
import UserService from '../public/modules/UserService';

mocha.setup('bdd');
let expect = chai.expect;

let userEmail = 'qweq@qweq.qweq';
let userPassword = 'qweqqweq';

describe('User Service', function () {
	describe('Log In', function () {
		it('success', function (done) {
			new UserService()
				.signIn(userEmail, userPassword)
				.then(response => {
					expect(response).to.be.not.empty;
					done();
				});
		});
		it('error', function (done) {
			userEmail = 'error@error.error';
			new UserService()
				.signIn(userEmail, userPassword)
				.catch(err => {
					done();
				});
		});
	});
});

mocha.checkLeaks();
mocha.run();