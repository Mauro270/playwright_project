const { test, expect } = require('@playwright/test');


test('Google Serge Test', async ({ page }) => {
  await page.goto('https://www.google.cl/');
  await page.getByLabel('Buscar', { exact: true }).fill('pedro');
  
    
    
  
    // Expect a title "to contain" a substring.
    //await expect(page).toHaveTitle(/Playwright/);
  });