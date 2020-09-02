import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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
