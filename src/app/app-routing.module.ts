import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { LoginComponent } from './componentes/login/login.component';
import { AltaRepartidorComponent } from './componentes/alta-repartidor/alta-repartidor.component';
import { PaisesListadoComponent } from './componentes/paises-listado/paises-listado.component';

const routes: Routes = [
  { path: 'bienvenida', component:BienvenidaComponent },
  { path: 'login', component:LoginComponent },
  { path: 'repartidores/alta', component:AltaRepartidorComponent },
  { path: 'paises/listado', component:PaisesListadoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
