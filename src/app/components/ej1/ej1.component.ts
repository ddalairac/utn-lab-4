import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej1',
  templateUrl: './ej1.component.html',
  styleUrls: ['./ej1.component.css']
})
export class Ej1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public age1: number = 0;
  public age2: number = 0;
  public promedio: number = null
  public suma: number = null

  calcular() {
      this.suma = this.age1 + this.age2;
      this.promedio = this.suma / 2;
      console.log(this.age1,
          this.age2,
          this.promedio,
          this.suma)
  }
  limpiar() {
      this.age1 = 0;
      this.age2 = 0;
      this.promedio = null
      this.suma = null
  }
}
