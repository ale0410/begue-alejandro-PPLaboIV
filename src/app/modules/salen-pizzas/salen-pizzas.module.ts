import { AltaRepartidorComponent } from 'src/app/componentes/alta-repartidor/alta-repartidor.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalenPizzasRoutingModule } from './salen-pizzas-routing.module';
import { SalenPizzasComponent } from './salen-pizzas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModificarRepartidorComponent } from 'src/app/componentes/modificar-repartidor/modificar-repartidor.component';
import { BajaRepartidorComponent } from 'src/app/componentes/baja-repartidor/baja-repartidor.component';
import { PizzasListadoComponent } from 'src/app/componentes/pizzas-listado/pizzas-listado.component';


@NgModule({
  declarations: [
    SalenPizzasComponent,
    AltaRepartidorComponent,
    ModificarRepartidorComponent,
    BajaRepartidorComponent,
    PizzasListadoComponent
  ],
  imports: [
    CommonModule,
    SalenPizzasRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SalenPizzasModule { }
