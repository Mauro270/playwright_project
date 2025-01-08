const { expect } = require('@playwright/test');

class SearchFunctionality {
    constructor(page) {
        this.page = page;
        this.searchBar = page.getByPlaceholder('Search for Vegetables and');
        this.productLabel = page.getByRole('heading', { name: 'Cucumber - 1 Kg' });
    }

    async searchProduct(productName) {
        await this.searchBar.fill(productName);
    }

    async validateLabel(expectedText) {
        await expect(this.productLabel).toHaveText(expectedText);
    }
}

module.exports = { SearchFunctionality };