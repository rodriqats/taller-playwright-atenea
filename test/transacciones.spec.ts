import { test, expect } from '@playwright/test';
import { PaginaLogin } from '../pages/paginaLogin';
import { PaginaDashboard } from '../pages/paginaDashboard';
import { ModalCrearCuenta } from '../pages/modalCrearCuenta';

let paginaLogin: PaginaLogin;
let paginaDashboard: PaginaDashboard;
let modalCrearCuenta: ModalCrearCuenta;


test('TC 5 - generate a new account', async ({ page }) => {
  paginaLogin = new PaginaLogin(page);
  paginaDashboard = new PaginaDashboard(page);
  modalCrearCuenta = new ModalCrearCuenta(page);

  await paginaLogin.visitarPaginaLogin();
  await paginaLogin.loginExitoso('rodrigo@gmail.com', '123456');
  await page.waitForURL('http://localhost:3000/dashboard');
  await paginaDashboard.botonAgregarCuenta.click();
  await modalCrearCuenta.tipoDeCuentaCombobox.click();
  await modalCrearCuenta.opcionDebito.click();
  await modalCrearCuenta.montoInicialInput.fill('150');
  await modalCrearCuenta.botonCrearCuenta.click();
  await page.waitForTimeout(2000); // Espera para que se cargue la página
});


