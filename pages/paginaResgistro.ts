//Importaciones de playwright
import { Page, Locator } from '@playwright/test';

//Exponiendo la clase PaginaRegistro para poder usara en los tests
export class PaginaRegistro {
    //Siempre necesitamos el page para interactual con la página
    readonly page: Page;
    //Definimos los localizadores que vamos a usar
    readonly nombreInput: Locator;
    readonly apellidoInput: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly botonRegistrarse: Locator;
    readonly botonIniciarSesion: Locator;

    //Variables de textos
    readonly textoRegistroExitoso: string;
    readonly textoEmailEnUso: string;

    //Contructor que recibe el page y define los localizadores
    constructor(page: Page) {
        //Asignamos el page a la propiedad de la clase
        this.page = page;
        //Definimos el localizar para el campo de nombre
        this.nombreInput = page.getByRole('textbox', { name: "Nombre" });
        this.apellidoInput = page.locator('[name= "lastName"]')
        this.emailInput = page.locator('[name= "email"]')
        this.passwordInput = page.locator('[name= "password"]');
        this.botonRegistrarse = page.getByTestId("boton-registrarse");
        this.botonIniciarSesion = page.getByTestId("boton-login-header-signup")

        this.textoRegistroExitoso = "Registro exitoso!";
        this.textoEmailEnUso = "Email already in use";
    }
    //Metodo para navegar a la pagina de registro
    async visitarPaginaRegistro() {
        await this.page.goto('http://localhost:3000/signup');
        await this.page.waitForLoadState('domcontentloaded')
    }
    async completarFormularioRegistro(nombre: string, apellido: string, email: string, password: string) {
        await this.nombreInput.fill(nombre);
        await this.apellidoInput.fill(apellido);
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
    }
    async hacerClickBotonRegistrarse() {
        await this.botonRegistrarse.click();
    }
    async registrarUsuario(nombre: string, apellido: string, email: string, password: string) {
        await this.completarFormularioRegistro(nombre, apellido, email, password);
        await this.hacerClickBotonRegistrarse();
    }
}
