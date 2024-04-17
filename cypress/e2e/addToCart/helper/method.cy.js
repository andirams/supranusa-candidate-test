import { Locator } from './locator.cy';

const locator = new Locator(); // diimport dari file locator.cy.js yg sebelumnya dibuat

export class Method {
	// method untuk mengisi username benar
	inputUsername() {
        var username = "standard_user";
		cy.get(locator.inputUsername).type(username);
		cy.get(locator.inputUsername).should('have.value', username);
	}

	// method untuk mengisi username benar
	inputProblemUser() {
        var username = "problem_user";
		cy.get(locator.inputUsername).type(username);
		cy.get(locator.inputUsername).should('have.value', username);
	}

	// method untuk mengisi password benar
	inputPassword() {
        var password = "secret_sauce";
		cy.get(locator.inputPassword).type(password);
		cy.get(locator.inputPassword).should('have.value', password);
	}

    // menekan tombol login
	tapButtonLogin() {
		cy.get(locator.btnLogin).click();
	}

    // menekan tombol add to cart dalam detail page
	tapButtonAddToCartDetailPage() {
		cy.get(locator.btnAddToCartDetailPage).click();
	}

    // menekan tombol add to cart dalam inventory page
	tapButtonAddToCartInventoryPage1() {
		cy.get(locator.btnAddToCartInvenPage1).click();
	}

    // menekan tombol add to cart dalam inventory page
	tapButtonAddToCartInventoryPage2() {
		cy.get(locator.btnAddToCartInvenPage2).click();
	}

    // menekan tombol add to cart dalam inventory page
	tapButtonAddToCartInventoryPage3() {
		cy.get(locator.btnAddToCartInvenPage3).click();
	}

    // menekan tombol remove dalam cart page
	tapButtonRemoveItemCartPage() {
		cy.get(locator.btnRemoveItemCartPage1).click();
	}

    // menekan tombol remove dalam inventory page
	tapButtonRemoveItemInventoryPage() {
		cy.get(locator.btnRemoveItemInvenPage).click();
	}

    // menekan tombol item pertama
	tapDetailItem1() {
		cy.get(locator.itemInv1).eq(0).click();
	}

    // menekan icon shopping cart
	tapShoppingCartIcon() {
		cy.get(locator.shopCart).click();
	}

	// mengecek user profile
    validateOnInventoryPage(){
        cy.get(locator.appLogo).should('be.visible');
	}

	// mengecek item sudah ditambahkan pada cart page
    checkAddedItemOnCartPage1(){
        cy.get(locator.itemCart).should('be.visible');
    }

	// mengecek item sudah ditambahkan pada cart page
    checkAddedItemOnCartPage2(){
        cy.get(locator.itemCart).eq(0).should('be.visible');
        cy.get(locator.itemCart).eq(1).should('be.visible');
    }

	// mengecek item sudah ditambahkan pada cart page
    errorCheckAddedItemOnCartPage1(){
        cy.get(locator.itemCart).should('not.exist');
    }

	// mengecek item tidak ada pada cart page
    checkItemsRemoved(){
        cy.get(locator.itemCart).should('not.exist');
    }

	// mengecek item tidak ada pada cart page
    errorCheckItemsRemoved(){
        cy.get(locator.itemCart).should('be.visible');
    }
}
