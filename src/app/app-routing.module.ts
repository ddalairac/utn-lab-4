import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { ListadoEntidadComponent } from './components/listado-entidad/listado-entidad.component';
import { ControlEntidadComponent } from './components/control-entidad/control-entidad.component';
// import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
    { path: 'bienvenido', component: BienvenidoComponent },
    { path: 'login', component: LoginComponent },
    { path: 'error', component: ErrorComponent },
    {
        path: 'paises', component: ControlEntidadComponent,
        children: [
            { path: 'listado', component: ListadoEntidadComponent },

        ]
    },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
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