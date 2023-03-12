import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarHeladoComponent } from './components/buscar-helado/buscar-helado.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CrearHeladoComponent } from './components/crear-helado/crear-helado.component';
import { DetalleHeladoComponent } from './components/detalle-helado/detalle-helado.component';
import { HeladosComponent } from './components/helados/helados.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'crear-helado',component:CrearHeladoComponent},
  {path:'helados',component:HeladosComponent},
  {path:'helados/:id',component:DetalleHeladoComponent},
  {path:'buscar-helado/:tipo',component:BuscarHeladoComponent},
  {path:'home',component:HomeComponent},
  {path:'',component:HomeComponent},
  {path:'contacto',component:ContactoComponent},
  {path:'**',component:HeladosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
