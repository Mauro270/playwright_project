import { test, expect } from '@playwright/test';
const { SolicitudCMRPage } = require('../pages/SolicitudCMRPage');
const datos = require('../datos/datos.json');


test('TC_001', async ({ page }) => {

  //Validar el registro de solicitud de tarjeta CMR: Validar el completo registro del formulario y que el botón para solicitud
  //se encuentre totalmente habilitado.
  
    const solicitudCMRPage = new SolicitudCMRPage(page);

      // Navegar a la página
      await solicitudCMRPage.navigate();
  
    // Verificar encabezado
    await solicitudCMRPage.verifyHeadingVisible();

    // Llenar el formulario
    await solicitudCMRPage.fillForm({
        rut: datos.rut,
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

  test('TC_002', async ({ page }) => {

    // validar que el botón para solicitar tarjeta CMR se encuentre totalmente deshabilitado (siempre y cuando no se termine de completar el formulario.)
    
      const solicitudCMRPage = new SolicitudCMRPage(page);
  
        // Navegar a la página
        await solicitudCMRPage.navigate();

         // Desplazarse hasta el botón
         await solicitudCMRPage.scrollToSendFormButton();

         // Validar si el botón está deshabilitado
        const isDisabled = await solicitudCMRPage.isSendFormButtonDisabled();
        expect(isDisabled).toBe(true); // Ajusta según el comportamiento esperado
    });



    