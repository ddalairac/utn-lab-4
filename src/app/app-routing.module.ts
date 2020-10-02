import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { ListadoEntidadComponent } from './components/listado-entidad/listado-entidad.component';
import { ControlEntidadComponent } from './components/control-entidad/control-entidad.component';
import { Ej1Component } from './components/ej1/ej1.component';
import { Ej2Component } from './components/ej2/ej2.component';
import { Ej3Component } from './components/ej3/ej3.component';
// import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PracticaParcialComponent } from './practica-parcial/practica-parcial.component';
import { PpBienvenidoComponent } from './practica-parcial/pp-bienvenido/pp-bienvenido.component';
import { PpBusquedaComponent } from './practica-parcial/pp-busqueda/pp-busqueda.component';
import { PpPeliculaAltaComponent } from './practica-parcial/pp-pelicula-alta/pp-pelicula-alta.component';
import { PpPeliculaListadoComponent } from './practica-parcial/pp-pelicula-listado/pp-pelicula-listado.component';
import { PpActorAltaComponent } from './practica-parcial/pp-actor-alta/pp-actor-alta.component';
import { PpActorListadoComponent } from './practica-parcial/pp-actor-listado/pp-actor-listado.component';

const appRoutes: Routes = [

    { path: 'ej1', component: Ej1Component },
    {
        path: 'ej2', component: Ej2Component,
        children: [
            { path: 'bienvenido', component: BienvenidoComponent },
            { path: 'login', component: LoginComponent },
            { path: 'error', component: ErrorComponent },
            { path: '', redirectTo: 'login', pathMatch: 'full' },
        ]
    },
    {
        path: 'ej3', component: Ej3Component,
        children: [
            { path: 'paises', component: ControlEntidadComponent,
            children: [
                { path: 'listado', component: ListadoEntidadComponent},
                { path: '', redirectTo: 'listado', pathMatch: 'full' },
            ]},
            { path: '', redirectTo: 'paises', pathMatch: 'full' },
        ]
    },
    {
        path: 'pp', component: PracticaParcialComponent,
        children: [
            { path: 'bienvenido', component: PpBienvenidoComponent},
            { path: 'busqueda', component: PpBusquedaComponent},
            { path: 'pelicula/alta', component: PpPeliculaAltaComponent},
            { path: 'pelicula/listado', component: PpPeliculaListadoComponent},
            { path: 'actor/alta', component: PpActorAltaComponent},
            { path: 'actor/listado', component: PpActorListadoComponent},
            { path: '', redirectTo: 'pelicula/listado', pathMatch: 'full' },
        ]
    },
    { path: '', redirectTo: 'pp', pathMatch: 'full' },
    // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }