import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { Page404Component } from './page404/page404.component';
// import { AppRouter } from './app.router';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    BienvenidoComponent,
    LoginComponent,
    ErrorComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,,
    // AppRouter
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
