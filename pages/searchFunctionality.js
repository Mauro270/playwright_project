const { expect } = require('@playwright/test');

class SearchFunctionality {
    constructor(page) {
        this.page = page;
        this.searchBar = page.getByPlaceholder('Search for Vegetables and');
        this.productLabel = page.getByRole('heading', { name: 'Cucumber - 1 Kg' });
        this.noExistproductLabel = page.getByRole('heading', { name: 'Sorry, no products matched' });
        this.buttonAddCart = page.getByRole('button', { hasText: 'ADD TO CART' }).nth(1);
        this.buttonAccesPayment = page.getByRole('link', { name: 'Cart' });
        this.buttonProceedCheckout = page.getByRole('button', { name: 'PROCEED TO CHECKOUT' });
        this.amountValidate =   page.locator('table#productCartTables .quantity');
    }

    async searchProduct(productName) {
        await this.searchBar.fill(productName);
    }

    async validateLabel(expectedText) {
        await expect(this.productLabel).toHaveText(expectedText);
    }

    async validateLabelNoExist(expectedText) {
        await expect(this.noExistproductLabel).toHaveText(expectedText);
    }

    async addCartItem(expectedText) {
        await this.buttonAddCart.click({ force: true });
        await this.buttonAccesPayment.click();
        await this.buttonProceedCheckout.click();
        await expect(this.amountValidate).toHaveText(expectedText, { timeout: 10000 });
    }
}

module.exports = { SearchFunctionality };