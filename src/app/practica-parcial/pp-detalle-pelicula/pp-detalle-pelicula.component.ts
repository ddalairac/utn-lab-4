import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from '../models';

@Component({
    selector: 'app-pp-detalle-pelicula',
    templateUrl: './pp-detalle-pelicula.component.html',
    styleUrls: ['./pp-detalle-pelicula.component.scss']
})
export class PpDetallePeliculaComponent implements OnInit {

    @Input() pelicula: Pelicula
    constructor() { }

    ngOnInit(): void {
    }

}
