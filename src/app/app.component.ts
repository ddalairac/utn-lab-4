import { Component } from '@angular/core';
/* 
1- (app.component.html) Realizar:
    una aplicacion que se le ingresen dos edades en dos cuadro de textos
    edadUno, EdadDos
    mostrar el promedio y la suma en dos cuadros de textos nuevos
    botones "calcular" y "limpiar cuadros de textos"
2-( componentes nuevos) Realizar:
    la clase usuario con nombre y clave ,
    el componente "Bienvenido"
    el componente "login"
    el componente "error"
    ( dejar los componentes listos)
    opcional: hacer ruteo
 */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public age1: number = 0;
    public age2: number = 0;
    public promedio: number = null
    public suma: number = null

    calcular() {
        this.suma = this.age1 + this.age2;
        this.promedio = this.suma / 2;
        console.log(this.age1,
            this.age2,
            this.promedio,
            this.suma)
    }
    limpiar() {
        this.age1 = 0;
        this.age2 = 0;
        this.promedio = null
        this.suma = null
    }
}
