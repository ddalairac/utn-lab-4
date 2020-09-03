import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor() { }
    usuario:Usuario
    ngOnInit(): void {
        this.usuario = new Usuario();
    }


}

export class Usuario{
    nombre:string
    clave:string
    
    aceptar() {
        console.log("log in")
    }
    limpiar() {
        this.nombre = null
        this.clave = null
    }
} 