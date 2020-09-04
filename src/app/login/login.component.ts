import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(public router: Router) { }
    usuario: Usuario
    ngOnInit(): void {
        this.usuario = new Usuario();
    }
    aceptar() {
        if (this.usuario.nombre == "admin" && this.usuario.clave == "admin") {
            this.router.navigateByUrl("bienvenido");
        } else {
            this.router.navigateByUrl("error");
        }
    }

}

export class Usuario {
    nombre: string
    clave: string

    limpiar() {
        this.nombre = null
        this.clave = null
    }
} 