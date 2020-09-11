import { Component, Input, OnInit } from '@angular/core';
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
  @Input()  selectedItem: iPersona;

}
