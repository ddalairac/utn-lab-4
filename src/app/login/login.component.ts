import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }
    public usuario: string = "";
    public clave: string = "";

    aceptar() {
        console.log("log in")
    }
    limpiar() {
        this.usuario = null
        this.clave = null
    }

}
