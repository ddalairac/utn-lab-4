import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  navLinks = [
      {
          label: "Bienvenido",
          path: "./bienvenido"
      },
      {
          label: "error",
          path: "./error"
      },
      {
          label: "login",
          path: "./login"
      },
  ];
}
