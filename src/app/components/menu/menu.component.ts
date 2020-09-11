import { Component, Input, OnInit } from '@angular/core';
import {iMenu} from '../../models/menu.model';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    constructor() { }

    @Input() navLinks: iMenu;
    @Input() isMain: boolean;

    ngOnInit(): void {
    }

    // navLinks = [
    //     {
    //         label: "Ejercicio1",
    //         path: "./ej1"
    //     },
    //     {
    //         label: "Ejercicio2",
    //         path: "./ej2"
    //     },
    //     {
    //         label: "Ejercicio3",
    //         path: "./ej3"
    //     },
    //     {
    //         label: "Bienvenido",
    //         path: "./bienvenido"
    //     },
    //     {
    //         label: "error",
    //         path: "./error"
    //     },
    //     {
    //         label: "login",
    //         path: "./login"
    //     },
    //     {
    //         label: "lista paises",
    //         path: "./paises/listado"
    //     },
    // ];
}
