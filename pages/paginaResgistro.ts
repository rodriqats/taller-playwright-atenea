import { Page, Locator } from '@playwright/test';

export class PaginaRegistro {
    //generamos el elemento de tipo Page y el elemento de tipo Locator
    //Tambien lo declaramos como readonly para que no se pueda modificar
    //readonly significa que una vez que se asigna un valor, no se puede cambiar
    readonly page: Page;
    readonly nombreInput: Locator;


    constructor(page: Page) {
        //inicializamos los elementos de la clase
        //page es el objeto que representa la pagina web que se esta probando
        //this.page es una referencia a la pagina web que se esta probando
        //this.nombreInput es una referencia al input de tipo texto que tiene el nombre "Nombre
        this.page = page;
        this.nombreInput = page.getByRole('textbox', { name: "Nombre" });
    }
}

