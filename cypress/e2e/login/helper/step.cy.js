import { Method } from './method.cy';

const method = new Method();

export class Step {
	// TCL-01 - Input correct username and correct password
	loginWithValidCredentials() {
		method.inputUsername();
		method.inputPassword();
		method.tapButtonLogin();
        method.validateOnInventoryPage();
	}

	// TCL-02 - Input correct username and incorrect password
	loginWithIncorrectPassword() {
		method.inputUsername();
		method.inputIncorrectPassword();
		method.tapButtonLogin();
		method.checkDataNotMatch();
	}

	// TCL-03 - Input incorrect username and correct password
	loginWithIncorrectUsername() {
		method.inputIncorrectUsername();
		method.inputPassword();
		method.tapButtonLogin();
		method.checkDataNotMatch();
	}

	// TCL-04 - Login with locked out user account
	loginWithLockedOutUser() {
		method.inputLockedOutUsername();
		method.inputPassword();
		method.tapButtonLogin();
		method.checkUserLockedOut();
	}

}
