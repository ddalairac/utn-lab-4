import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  routerLinkActive;
  navLinks = [
      {
          label: "Bienvenido",
          path: "./Bienvenido",
          isActive: ""
      },
      {
          label: "usuario",
          path: "./usuario",
          isActive: ""
      },
      {
          label: "error",
          path: "./error",
          isActive: ""
      },
      {
          label: "login",
          path: "./login",
          isActive: ""
      },
      {
          label: "contact",
          path: "./contact",
          isActive: ""
      },
  ];
}
