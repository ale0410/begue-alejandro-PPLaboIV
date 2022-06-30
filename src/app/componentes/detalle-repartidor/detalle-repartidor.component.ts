import { Repartidor } from './../../clases/repartidor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-repartidor',
  templateUrl: './detalle-repartidor.component.html',
  styleUrls: ['./detalle-repartidor.component.css']
})
export class DetalleRepartidorComponent implements OnInit {

  repartidorSeleccionado : Repartidor | any;

  constructor() { }

  ngOnInit(): void {
  }

  tomarRepartidorParaMostrar(repartidor : Repartidor){
    this.repartidorSeleccionado = repartidor;
  }

}
