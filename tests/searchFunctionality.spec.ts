const { test } = require('@playwright/test');
const { SearchFunctionality } = require('../pages/SearchFunctionality');

test('TC_001 - Validate search functionality', async ({ page }) => {
    const searchFunction = new SearchFunctionality(page);

    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');
    await searchFunction.searchProduct('Cucumber');
    await searchFunction.validateLabel('Cucumber - 1 Kg');
});