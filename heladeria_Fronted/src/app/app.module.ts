import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { CrearHeladoComponent } from './components/crear-helado/crear-helado.component';
import { HeladosComponent } from './components/helados/helados.component';
import { DetalleHeladoComponent } from './components/detalle-helado/detalle-helado.component';
import { HomeComponent } from './components/home/home.component';
import { BuscarHeladoComponent } from './components/buscar-helado/buscar-helado.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CrearHeladoComponent,
    HeladosComponent,
    DetalleHeladoComponent,
    HomeComponent,
    BuscarHeladoComponent,
    ContactoComponent,
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
