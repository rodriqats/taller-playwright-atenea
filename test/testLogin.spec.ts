import { test, expect } from '@playwright/test';
import { PaginaRegistro } from '../pages/paginaResgistro';


let paginaRegistro: PaginaRegistro;

test('TC1 - Login with valid credentials', async ({ page }) => {
  paginaRegistro = new PaginaRegistro(page);
  // Generar un email aleatorio para evitar conflictos de registro
  const emailAleatorio = 'rodrigo' + Math.floor(Math.random() * 1000) + '@example.com';

  await paginaRegistro.visitarPaginaRegistro();
  await paginaRegistro.registrarUsuario(
    'Rodrigo',
    'Serrato',
    emailAleatorio,
    '123456'
  );
  await expect(page.getByText(paginaRegistro.textoRegistroExitoso)).toBeVisible();
  await page.waitForTimeout(2000)

});

test('TC2 - Login with invalid credentials', async ({ page }) => {
  paginaRegistro = new PaginaRegistro(page);
  // Navegar a la página de registro
  await paginaRegistro.visitarPaginaRegistro();
  await paginaRegistro.completarFormularioRegistro(
    'Rodrigo',
    'Serrato',
    'rodrigo@gmail.com',
    '123456');
  await paginaRegistro.hacerClickBotonRegistrarse();
  await expect(page.getByText(paginaRegistro.textoEmailEnUso)).toBeVisible();
});

//test('Login without credentials', async ({ page }) => {

//});


