const { expect } = require('@playwright/test');


class SolicitudCMRPage {
    constructor(page) {
        this.page = page;
        this.url = 'https://solicitudes.bancofalabella.cl/?detalleClic=captador_cmr';
        this.heading = page.getByRole('heading', { name: 'Estás a segundos de ver si' });
        this.rutField = page.getByPlaceholder('Ej: 11.111.111-');
        this.phoneField = page.getByPlaceholder('Ej: 123456789');
        this.cellField = page.getByPlaceholder('Ej: 9XX XXX XXX');
        this.emailField = page.getByPlaceholder('Ej: nombre@dominio.com');
        this.tipoActividadSelect = page.getByLabel('Tipo de actividad');
        this.privacidadCheckbox = page.locator('#acceptPrivacyCheck');
        this.tercerosCheckbox = page.locator('#acceptThirdParties');
        this.terminosCheckbox = page.locator('#acceptTermsCheck');
        this.verCMRButton = page.getByRole('button', { name: 'VER CMR DISPONIBLE' });
    }

    async navigate() {
        await this.page.goto(this.url);
    }

    async verifyHeadingVisible(timeout = 30000) {
        await expect(this.heading).toBeVisible({ timeout });
        await page.screenshot({ path: './test-results/screenshot_validacion.png', fullPage: true });
    }

    async fillForm({ rut, phone, cell, email }) {
        await this.rutField.fill(rut);
        await this.phoneField.fill(phone);
        await this.cellField.fill(cell);
        await this.emailField.fill(email);
    }

    async selectTipoActividad(option) {
        await this.tipoActividadSelect.selectOption(option);
    }

    async checkAllCheckboxes() {
        await this.privacidadCheckbox.check();
        await this.tercerosCheckbox.check();
        await this.terminosCheckbox.check();
    }

    async verifyButtonEnabled() {
        await expect(this.verCMRButton).toBeEnabled();
    }
}

module.exports = { SolicitudCMRPage };