import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practica-parcial',
  templateUrl: './practica-parcial.component.html',
  styleUrls: ['./practica-parcial.component.css']
})
export class PracticaParcialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  menu = [
    {
        label: "bienvenido",
        path: "/pp/bienvenido"
    },
    {
        label: "busqueda",
        path: "/pp/busqueda"
    },
    {
        label: "alta pelicula ",
        path: "/pp/pelicula/alta"
    },
    {
        label: "listado peliculas ",
        path: "/pp/pelicula/listado"
    },
    {
        label: "alta actor ",
        path: "/pp/actor/alta"
    },
    {
        label: "listado actores",
        path: "/pp/actor/listado"
    },
   
];

}
