import { Component, OnInit } from '@angular/core';
import { ErrorTracker } from '../../models/error-tracker.model';
import { iPersona } from '../../models/persona.model';
import { RestService } from '../../services/rest.service';

@Component({
    selector: 'app-control-entidad',
    templateUrl: './control-entidad.component.html',
    styleUrls: ['./control-entidad.component.scss']
})
export class ControlEntidadComponent implements OnInit {

    
    constructor(private restService: RestService) { }

    personas: iPersona[];
    selectedItem: iPersona;

    ngOnInit(): void {
        this.getList();
    }

    getList(): void {
        this.restService.getListPersonas().subscribe(
            (data: iPersona[]) => {
                this.personas = data;
            },
            (err: ErrorTracker) => {
                console.log("GET personas ERR", err);
            }
        );
    }
    onEventSelectedItem(persona){
        this.selectedItem = persona
    }
}
