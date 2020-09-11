import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { ListadoEntidadComponent } from './components/listado-entidad/listado-entidad.component';
import { ControlEntidadComponent } from './components/control-entidad/control-entidad.component';
import { HttpClientModule } from '@angular/common/http';
import { DetalleEntidadComponent } from './components/detalle-entidad/detalle-entidad.component';
import { Ej1Component } from './components/ej1/ej1.component';
import { Ej2Component } from './components/ej2/ej2.component';
import { Ej3Component } from './components/ej3/ej3.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    LoginComponent,
    ErrorComponent,
    MenuComponent,
    ListadoEntidadComponent,
    ControlEntidadComponent,
    DetalleEntidadComponent,
    Ej1Component,
    Ej2Component,
    Ej3Component
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
