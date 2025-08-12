//Importaciones de playwright
import { Page, Locator, expect } from '@playwright/test';

//Exponiendo la clase PaginaLogin para poder usara en los tests
export class PaginaDashboard {
    //Siempre necesitamos el page para interactual con la página
    readonly page: Page;
    //Definimos los localizadores que vamos a usar
    readonly botonAgregarCuenta: Locator;

    //Variables de textos
    readonly textoLoginExitoso: string;

    constructor(page: Page) {
        //Asignamos el page a la propiedad de la clase
        this.page = page;
        //Definimos el localizar para el campo de nombre
        this.botonAgregarCuenta = this.page.getByTestId('tarjeta-agregar-cuenta');


        //Definimos los textos que vamos a usar
        this.textoLoginExitoso = 'Inicio de sesión exitoso';

    }

    async visitarPaginaLogin() {
        await this.page.goto('http://localhost:3000/login');
        await this.page.waitForLoadState('domcontentloaded')
    }

}