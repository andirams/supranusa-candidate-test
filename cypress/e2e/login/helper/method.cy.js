import { Locator } from './locator.cy';

const locator = new Locator(); // diimport dari file locator.cy.js yg sebelumnya dibuat

export class Method {
	// method untuk mengisi username benar
	inputUsername() {
        var username = "standard_user";
		cy.get(locator.inputUsername).type(username);
		cy.get(locator.inputUsername).should('have.value', username);
	}

	// method untuk mengisi username salah
    inputIncorrectUsername(){
        var username = "standarduser";
		cy.get(locator.inputUsername).type(username);
		cy.get(locator.inputUsername).should('have.value', username);
    }

	// method untuk mengisi username terkunci
    inputLockedOutUsername(){
        var username = "locked_out_user";
		cy.get(locator.inputUsername).type(username);
		cy.get(locator.inputUsername).should('have.value', username);
    }

	// method untuk mengisi password benar
	inputPassword() {
        var password = "secret_sauce";
		cy.get(locator.inputPassword).type(password);
		cy.get(locator.inputPassword).should('have.value', password);
	}

	// method untuk mengisi password salah
	inputIncorrectPassword() {
        var password = "secretsauce";
		cy.get(locator.inputPassword).type(password);
		cy.get(locator.inputPassword).should('have.value', password);
	}

    // menekan tombol login
	tapButtonLogin() {
		cy.get(locator.btnLogin).click();
	}

	// mengecek user profile
    validateOnInventoryPage(){
        cy.get(locator.appLogo).should('be.visible');
	}

	// mengecek error alert username atau password salah
    checkDataNotMatch(){
        cy.get(locator.alertDataNotMatch).should('be.visible');
    }

	// mengecek error alert user account locked out
    checkUserLockedOut(){
        cy.get(locator.alertUserLockedOut).should('be.visible');
    }
}
