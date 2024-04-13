import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { RecomendadosComponent } from './components/recomendados/recomendados.component';
import { LibrosComponent } from './components/libros/libros.component';
import { GestionLibrosComponent } from './components/gestion-libros/gestion-libros.component';
import { NavbarComponent } from './components/frag/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RecomendadosComponent,
    LibrosComponent,
    GestionLibrosComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
