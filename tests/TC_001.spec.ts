import { test, expect } from '@playwright/test';
const { SolicitudCMRPage } = require('../pages/SolicitudCMRPage');

test('Validar texto (Abre tu cuenta c) ', async ({ page }) => {
  
    const solicitudCMRPage = new SolicitudCMRPage(page);

      // Navegar a la página
      await solicitudCMRPage.navigate();
  
    // Verificar encabezado
    await solicitudCMRPage.verifyHeadingVisible();

    // Llenar el formulario
    await solicitudCMRPage.fillForm({
        rut: '16.970.266-7',
        phone: '530973821',
        cell: '967284043',
        email: 'mauro.270@gmail.com',
    });

    // Seleccionar opciones y marcar casillas
    await solicitudCMRPage.selectTipoActividad('Dependiente');
    await solicitudCMRPage.checkAllCheckboxes();

    // Verificar que el botón esté habilitado
    await solicitudCMRPage.verifyButtonEnabled();
    await page.screenshot({ path: './test-results/screenshot_abreTuCuenta.png', fullPage: true });
    

  });