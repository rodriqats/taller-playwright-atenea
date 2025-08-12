//Importaciones de playwright
import { Page, Locator, expect } from '@playwright/test';

//Exponiendo la clase PaginaLogin para poder usara en los tests
export class PaginaLogin {
    //Siempre necesitamos el page para interactual con la página
    readonly page: Page;
    //Definimos los localizadores que vamos a usar
    readonly emailInput: Locator;
    readonly contrasenaInput: Locator;
    readonly botonIniciarSesion: Locator;
    readonly linkRegistrarse: Locator;
    readonly botonCrearCuenta: Locator;

    //Variables de textos
    readonly textoLoginExitoso: string;


    //Contructor que recibe el page y define los localizadores
    constructor(page: Page) {
        //Asignamos el page a la propiedad de la clase
        this.page = page;
        //Definimos el localizar para el campo de nombre
        this.emailInput = page.getByRole('textbox', { name: 'Correo electrónico' });
        this.contrasenaInput = page.getByRole('textbox', { name: 'Contraseña' });
        this.botonIniciarSesion = page.getByTestId('boton-login');
        this.linkRegistrarse = page.getByTestId('link-registrarse-login');
        this.botonCrearCuenta = page.getByTestId('boton-signup-header');

        //Definimos los textos que vamos a usar
        this.textoLoginExitoso = 'Inicio de sesión exitoso';

    }

    async visitarPaginaLogin() {
        await this.page.goto('http://localhost:3000/login');
        await this.page.waitForLoadState('domcontentloaded')
    }
    async completarFormularioLogin(email: string, password: string) {
        await this.emailInput.fill(email);
        await this.contrasenaInput.fill(password);
    }
    async clickBotonLogin() {
        await this.botonIniciarSesion.click();
    }

    async loginExitoso(email: string, password: string) {
        await this.completarFormularioLogin(email, password);
        await this.clickBotonLogin();
        await expect(this.page.getByText(this.textoLoginExitoso)).toBeVisible();
    }
}