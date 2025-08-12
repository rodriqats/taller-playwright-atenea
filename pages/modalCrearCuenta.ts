//Importaciones de playwright
import { Page, Locator, expect } from '@playwright/test';


export class ModalCrearCuenta {

    readonly page: Page;

    readonly tipoDeCuentaCombobox: Locator;
    readonly opcionDebito: Locator;
    //readonly opcionCredito: Locator;
    //readonly opcionAhorro: Locator;
    readonly montoInicialInput: Locator;
    readonly botonCrearCuenta: Locator;
    readonly textoLoginExitoso: string;

    constructor(page: Page) {
        //Asignamos el page a la propiedad de la clase
        this.page = page;
        this.tipoDeCuentaCombobox = this.page.getByRole('combobox', { name: 'Tipo de cuenta *' })
        this.opcionDebito = this.page.getByRole('option', { name: 'Débito' })
        this.montoInicialInput = this.page.getByRole('spinbutton', { name: 'Monto inicial *' })
        this.botonCrearCuenta = this.page.getByTestId('boton-crear-cuenta');

    }
}