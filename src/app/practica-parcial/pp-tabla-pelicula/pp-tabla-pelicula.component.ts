import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from '../models';

@Component({
  selector: 'app-pp-tabla-pelicula',
  templateUrl: './pp-tabla-pelicula.component.html',
  styleUrls: ['./pp-tabla-pelicula.component.scss']
})
export class PpTablaPeliculaComponent implements OnInit {

    @Input() peliculas: Pelicula[];
    @Output() selection: EventEmitter<Pelicula> = new EventEmitter<Pelicula>() ;
    // listado: any
    // miJugadoresServicio: JugadoresService

    // constructor(
    //     private fbsorageservice: FbStorageService,
    //     private serviceJugadores: JugadoresService
    // ) { }
    // dataSource: PlayerScore[] = []

    
    displayedColumns: string[] = ["foto_de_la_película","nombre", "tipo", "fecha_de_estreno", "cantidad_de_publico", "Acción"];

    // public getPlayers() {
    //     this.fbsorageservice.readAll(eCollections.scores).then(
    //         (data) => {
    //             this.dataSource = data
    //             // console.log("Jugadores:", this.dataSource)
    //         }
    //     )
    // }
    ngOnInit() {
    }
    onSelect(pelicula){
        this.selection.emit(pelicula);
    }
}
