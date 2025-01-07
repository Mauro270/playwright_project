const { test, expect } = require('@playwright/test');
const { CreditoConsumoPage } = require('../pages/CreditoConsumoPage');

test('TC_003', async ({ page }) => {
    const creditoConsumoPage = new CreditoConsumoPage(page);

    // Navegar a la página
    await creditoConsumoPage.navigate();

    // Hover sobre el menú "Créditos"
    await creditoConsumoPage.hoverOverCreditos();

    // Clic en el enlace "Crédito de Consumo"
    await creditoConsumoPage.clickCreditoConsumo();

    // Desplázate hasta el botón "Simular"
    await creditoConsumoPage.scrollToSimularButton();

    // Rellena el campo RUT
    await creditoConsumoPage.fillRut('169702667');

    // Haz clic en el botón "Simular"
    await creditoConsumoPage.clickSimular();

    // Valida que el botón "Simula tu crédito" esté deshabilitado
    const isDisabled = await creditoConsumoPage.isSimulaCreditoButtonDisabled();
    expect(isDisabled).toBe(true);
});