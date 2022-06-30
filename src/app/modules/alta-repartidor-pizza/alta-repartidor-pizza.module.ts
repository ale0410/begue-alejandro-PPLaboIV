import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AltaRepartidorPizzaRoutingModule } from './alta-repartidor-pizza-routing.module';
import { AltaRepartidorPizzaComponent } from './alta-repartidor-pizza.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaisesListadoComponent } from '../../componentes/paises-listado/paises-listado.component';


@NgModule({
  declarations: [
    AltaRepartidorPizzaComponent,
    PaisesListadoComponent
  ],
  imports: [
    CommonModule,
    AltaRepartidorPizzaRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AltaRepartidorPizzaModule { }
