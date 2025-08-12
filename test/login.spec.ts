import { test, expect } from '@playwright/test';
import { PaginaLogin } from '../pages/paginaLogin';

let paginaLogin: PaginaLogin;


test('TC 4 - validate redirect after successful registration', async ({ page }) => {
  paginaLogin = new PaginaLogin(page);
  await paginaLogin.visitarPaginaLogin();
  await paginaLogin.loginExitoso('rodrigo@gmail.com', '123456');
  await expect(paginaLogin.page.getByText(paginaLogin.textoLoginExitoso)).toBeVisible();
});
