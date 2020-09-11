import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { iPersona } from '../models/persona.model';

@Component({
    selector: 'app-detalle-entidad',
    templateUrl: './detalle-entidad.component.html',
    styleUrls: ['./detalle-entidad.component.scss']
})
export class DetalleEntidadComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }
    @Input() selectedItem: iPersona;
    @Output() eventDeleteItem: EventEmitter<iPersona> = new EventEmitter();

    onDeletPersona(persona: iPersona) {
        this.eventDeleteItem.emit(persona)
    }
}
