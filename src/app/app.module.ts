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
import { PracticaParcialComponent } from './practica-parcial/practica-parcial.component';
import { PpBienvenidoComponent } from './practica-parcial/pp-bienvenido/pp-bienvenido.component';
import { PpBusquedaComponent } from './practica-parcial/pp-busqueda/pp-busqueda.component';
import { PpPeliculaAltaComponent } from './practica-parcial/pp-pelicula-alta/pp-pelicula-alta.component';
import { PpActorListadoComponent } from './practica-parcial/pp-actor-listado/pp-actor-listado.component';
import { PpActorAltaComponent } from './practica-parcial/pp-actor-alta/pp-actor-alta.component';
import { PpPeliculaListadoComponent } from './practica-parcial/pp-pelicula-listado/pp-pelicula-listado.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PpTablaPeliculaComponent } from './practica-parcial/pp-tabla-pelicula/pp-tabla-pelicula.component';
import { PpDetallePeliculaComponent } from './practica-parcial/pp-detalle-pelicula/pp-detalle-pelicula.component';
import { MaterialModule } from './vendors/material.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

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
    Ej3Component,
    PracticaParcialComponent,
    PpBienvenidoComponent,
    PpBusquedaComponent,
    PpPeliculaAltaComponent,
    PpActorListadoComponent,
    PpActorAltaComponent,
    PpPeliculaListadoComponent,
    PpTablaPeliculaComponent,
    PpDetallePeliculaComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
