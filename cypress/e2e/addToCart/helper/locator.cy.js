export class Locator {
	// input
	inputUsername = 'input[name="user-name"]';
	inputPassword = 'input[name="password"]';

	// button
	btnLogin = '#login-button';
    btnAddToCartDetailPage = '#add-to-cart';
    btnAddToCartInvenPage1 = '#add-to-cart-sauce-labs-backpack';
    btnAddToCartInvenPage2 = '#add-to-cart-sauce-labs-bike-light';
    btnAddToCartInvenPage3 = '#add-to-cart-sauce-labs-bolt-t-shirt';
    btnRemoveItemCartPage1 = '#remove-sauce-labs-backpack';
    btnRemoveItemInvenPage = '#remove-sauce-labs-backpack';

    // item inventory page
    itemInv1 = '.inventory_item_name';//0

    // item cart page
    itemCart = '.cart_item';//...

    // icon
    appLogo = '.app_logo';
    shopCart = '.shopping_cart_link';

    // alert
    alertDataNotMatch = '.error-message-container';
    alertUserLockedOut = '.error-message-container';
}
