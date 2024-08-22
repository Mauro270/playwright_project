import { test, expect } from '@playwright/test';

test( 'Validar texto (Abre tu cuenta c)', async ({ page }) => {
  // Recording...

  await page.goto('https://www.bancofalabella.cl/');
 console.log(await page.viewportSize()?.width) 
 console.log(await page.viewportSize()?.height) 
 
  await page.getByRole('link', { name: 'Cuentas', exact: true }).click();
  await page.getByRole('heading', { name: 'Abre tu Cuenta Corriente en 5' })
  await expect(page.getByRole('heading', { name: 'Abre tu Cuenta Corriente en 5' })).toContainText('Abre tu Cuenta Corriente en 5')
  await page.close();
});