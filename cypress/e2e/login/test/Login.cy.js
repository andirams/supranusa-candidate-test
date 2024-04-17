import {
    Step
} from '../helper/step.cy';

const step = new Step();

describe('Login', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);
        // mengunjungi url login
        cy.visit('/');
    });

    it('TCL-01 - Input correct username and correct password', () => {
        // memanggil step loginWithValidCredentials dari file step.cy.js
        step.loginWithValidCredentials();
    });

    it('TCL-02 - Input correct username and incorrect password', () => {
        // memanggil step loginWithIncorrectPassword dari file step.cy.js
        step.loginWithIncorrectPassword();
    });

    it('TCL-03 - Input incorrect username and correct password', () => {
        // memanggil step loginWithWrongUsername dari file step.cy.js
        step.loginWithIncorrectUsername();
    });

    it('TCL-04 - Login with locked out user account', () => {
        // memanggil step loginWithLockedOutUser dari file step.cy.js
        step.loginWithLockedOutUser();
    });
});