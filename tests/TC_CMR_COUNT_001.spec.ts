import { test, expect } from '@playwright/test';

test( 'Validar texto (Abre tu cuenta c)', async ({ page }) => {


await page.goto('https://www.bancofalabella.cl/');
 console.log(await page.viewportSize()?.width) 
 console.log(await page.viewportSize()?.height) 
 
  await page.getByRole('link', { name: 'Cuentas', exact: true }).click();
  await page.getByRole('heading', { name: 'Abre tu Cuenta Corriente en 5' })
  await expect(page.getByRole('heading', { name: 'Abre tu Cuenta Corriente en 5' })).toContainText('Abre tu Cuenta Corriente en 5')
  await page.screenshot({ path: './test-results/screenshot.png', fullPage: true });
  await page.close();
});


test( 'Validar texto (Para que sirve una línea de crédito)', async ({ page }) => {
  // Realiza mouse hover en un elemento

  await page.goto('https://www.bancofalabella.cl/');
  await page.waitForTimeout(5000)
  await page.getByText('Cuentas').first().hover();
  await page.close();
});