import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ej2',
    templateUrl: './ej2.component.html',
    styleUrls: ['./ej2.component.css']
})
export class Ej2Component implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }
    subMenu = [
        
        {
            label: "login",
            path: "./login"
        },
        {
            label: "Bienvenido",
            path: "./bienvenido"
        },
        {
            label: "error",
            path: "./error"
        }
    ]
}
