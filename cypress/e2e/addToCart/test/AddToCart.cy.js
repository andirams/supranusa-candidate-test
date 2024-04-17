import {
    Step
} from '../helper/step.cy';

const step = new Step();

describe('Add To Cart', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);
        // mengunjungi url login
        cy.visit('/');
    });

    it('TCATC-01 - Adding item to cart from detail page', () => {
        // memanggil step addItemToCartFromDetailPage dari file step.cy.js
        step.addItemToCartFromDetailPage();
    });

    it('TCATC-02 - Adding item to cart from inventory page', () => {
        // memanggil step addItemToCartFromInventoryPage dari file step.cy.js
        step.addItemToCartFromInventoryPage();
    });

    it('TCATC-03 - Adding more than 1 item to cart from inventory page', () => {
        // memanggil step addMoreThan1ItemToCartFromInventoryPage dari file step.cy.js
        step.addMoreThan1ItemToCartFromInventoryPage();
    });

    it('TCATC-04 - Remove added item to cart from cart page', () => {
        // memanggil step removeAddedItemFromCartPage dari file step.cy.js
        step.removeAddedItemFromCartPage();
    });

    it('TCATC-05 - Remove added item to cart from inventory page', () => {
        // memanggil step removeAddedItemFromInventoryPage dari file step.cy.js
        step.removeAddedItemFromInventoryPage();
    });

    it('TCATC-06 - Error remove added item to cart from inventory page', () => {
        // memanggil step errorRemoveAddedItemFromInventoryPage dari file step.cy.js
        step.errorRemoveAddedItemFromInventoryPage();
    });

    it('TCATC-07 - Error adding item to cart from inventory page', () => {
        // memanggil step errorAddItemToCartFromInventoryPage dari file step.cy.js
        step.errorAddItemToCartFromInventoryPage();
    });
});