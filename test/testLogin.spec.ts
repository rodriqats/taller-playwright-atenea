import { test, expect } from '@playwright/test';
import { PaginaRegistro } from '../pages/paginaResgistro';

// Importamos la clase PaginaRegistro desde el archivo paginaResgistro.ts
// Esta clase contiene los selectores y métodos para interactuar con la página de registro
let paginaRegistro: PaginaRegistro;
test(' TC1 -Login with valid credentials', async ({ page }) => {
  // Creamos una instancia de PaginaRegistro pasando el objeto page
  // Esto nos permite acceder a los selectores y métodos definidos en la clase
  // para interactuar con la página de registro
  paginaRegistro = new PaginaRegistro(page);
  const emailAleatorio = 'rodrigos' + Math.floor(Math.random() * 1000) + '@example.com';
  await page.goto('http://localhost:3000/signup');
  await paginaRegistro.nombreInput.fill('Rodrigo');
  await page.locator('[name= "lastName"]').fill('Serrato');
  await page.locator('[name= "email"]').fill(emailAleatorio);
  await page.locator('[name= "password"]').fill('123456');
  await page.getByTestId('formulario-registro').click();
  await expect(page.getByText('Registro exitoso!')).toBeVisible();
  await page.waitForTimeout(2000)

});

//test('Login with invalid credentials', async ({ page }) => {

//});

//test('Login without credentials', async ({ page }) => {

//});


