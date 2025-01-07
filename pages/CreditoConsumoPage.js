const { expect } = require('@playwright/test');

class CreditoConsumoPage {
    constructor(page) {
        this.page = page;
        this.url = 'https://www.bancofalabella.cl/';
        this.creditosLink = this.page.getByRole('link', { name: 'Créditos', exact: true });
        this.creditoConsumoLink = this.page.getByRole('link', { name: 'Crédito de Consumo' });
        this.simularButton = this.page.locator('button:has-text("Simular")');
        this.rutInput = this.page.getByPlaceholder('Ingresa tu RUT');
        this.simularButtonSubmit = this.page.getByRole('button', { name: 'Simular' });
        this.simulaCreditoButton = this.page.getByRole('button', { name: 'Simula tu crédito' });
    }

    async navigate() {
        await this.page.goto(this.url);
    }

    async hoverOverCreditos() {
        await this.creditosLink.hover();
    }

    async clickCreditoConsumo() {
        await this.creditoConsumoLink.click();
    }

    async scrollToSimularButton() {
        await this.simularButton.scrollIntoViewIfNeeded();
    }

    async fillRut(rut) {
        await this.rutInput.fill(rut);
    }

    async clickSimular() {
        await this.simularButtonSubmit.click();
    }

    async isSimulaCreditoButtonDisabled() {
        return await this.simulaCreditoButton.isDisabled();
    }
}

module.exports = { CreditoConsumoPage };