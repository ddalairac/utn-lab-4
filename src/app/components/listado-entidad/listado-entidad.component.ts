import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { iPersona } from "../../models/persona.model";
import { ErrorTracker } from "../../models/error-tracker.model";

@Component({
    selector: 'app-listado-entidad',
    templateUrl: './listado-entidad.component.html',
    styleUrls: ['./listado-entidad.component.scss']
})
export class ListadoEntidadComponent implements OnInit {

    constructor() { }
    @Input()  personas: iPersona[];
    @Output() eventSelectedItem: EventEmitter<iPersona> = new EventEmitter();
    selectedItem: iPersona;

    ngOnInit(): void {
    }
    onSelectPersona(persona:iPersona){
        this.selectedItem = persona;
        this.eventSelectedItem.emit(persona)
    }

}
