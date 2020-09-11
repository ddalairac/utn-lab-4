import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    mainMenu = [
        {
            label: "Ejercicio1",
            path: "./ej1"
        },
        {
            label: "Ejercicio2",
            path: "./ej2"
        },
        {
            label: "Ejercicio3",
            path: "./ej3"
        }
    ];
}
