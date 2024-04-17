import { Method } from './method.cy';

const method = new Method();

export class Step {
	// TCATC-01 - Adding item to cart from detail page
	addItemToCartFromDetailPage() {
		method.inputUsername();
		method.inputPassword();
		method.tapButtonLogin();
		method.tapDetailItem1();
		method.tapButtonAddToCartDetailPage();
		method.tapShoppingCartIcon();
		method.checkAddedItemOnCartPage1();
	}

	// TCATC-02 - Adding item to cart from inventory page
	addItemToCartFromInventoryPage() {
		method.inputUsername();
		method.inputPassword();
		method.tapButtonLogin();
		method.tapButtonAddToCartInventoryPage1();
		method.tapShoppingCartIcon();
		method.checkAddedItemOnCartPage1();
	}

	// TCATC-03 - Adding more than 1 item to cart from inventory page
	addMoreThan1ItemToCartFromInventoryPage() {
		method.inputUsername();
		method.inputPassword();
		method.tapButtonLogin();
		method.tapButtonAddToCartInventoryPage1();
		method.tapButtonAddToCartInventoryPage2();
		method.tapShoppingCartIcon();
		method.checkAddedItemOnCartPage2();
	}

	// TCATC-04 - Remove added item to cart from cart page
	removeAddedItemFromCartPage() {
		method.inputUsername();
		method.inputPassword();
		method.tapButtonLogin();
		method.tapButtonAddToCartInventoryPage1();
		method.tapShoppingCartIcon();
		method.tapButtonRemoveItemCartPage();
		method.checkItemsRemoved();
	}

	// TCATC-05 - Remove added item to cart from inventory page
	removeAddedItemFromInventoryPage() {
		method.inputUsername();
		method.inputPassword();
		method.tapButtonLogin();
		method.tapButtonAddToCartInventoryPage1();
		method.tapButtonRemoveItemInventoryPage();
		method.tapShoppingCartIcon();
		method.checkItemsRemoved();
	}

	// TCATC-06 - Error remove added item to cart from inventory page
	errorRemoveAddedItemFromInventoryPage() {
		method.inputProblemUser();
		method.inputPassword();
		method.tapButtonLogin();
		method.tapButtonAddToCartInventoryPage1();
		method.tapButtonRemoveItemInventoryPage();
		method.tapShoppingCartIcon();
		method.errorCheckItemsRemoved();
	}

	// TCATC-07 - Error adding item to cart from inventory page
	errorAddItemToCartFromInventoryPage() {
		method.inputProblemUser();
		method.inputPassword();
		method.tapButtonLogin();
		method.tapButtonAddToCartInventoryPage3();
		method.tapShoppingCartIcon();
		method.errorCheckAddedItemOnCartPage1();
	}

}
