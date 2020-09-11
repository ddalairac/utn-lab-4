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
    @Input()  hideBtn: boolean;
    @Output() eventSelectedItem: EventEmitter<iPersona> = new EventEmitter();

    ngOnInit(): void {
    }
    onSelectPersona(persona:iPersona){
        this.eventSelectedItem.emit(persona)
    }

}
