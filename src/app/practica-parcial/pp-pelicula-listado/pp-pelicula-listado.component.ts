import { Component, OnInit } from '@angular/core';

import { FbStorageService } from '../../services/fb-storage.service';
import { eCollections, Pelicula } from '../models';

@Component({
    selector: 'app-pp-pelicula-listado',
    templateUrl: './pp-pelicula-listado.component.html',
    styleUrls: ['./pp-pelicula-listado.component.css']
})
export class PpPeliculaListadoComponent implements OnInit {

    constructor(private fbsorageservice: FbStorageService,) { }

    ngOnInit(): void {
        this.getMovies()
    }

    peliculas: Pelicula[]
    pelicula: Pelicula
    private getMovies() {
        this.fbsorageservice.readAll(eCollections.peliculas).then(
            (data) => {
                this.peliculas = data
                // this.pelicula = data[0]
                console.log("Peliculas:", this.peliculas)
            }
        )
    }
    public onSelection(pelicula){
        this.pelicula = pelicula;
    }
}
