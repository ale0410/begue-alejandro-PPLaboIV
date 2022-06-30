import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Repartidor } from '../../clases/repartidor';
import { DataBaseService } from '../../servicios/data-base.service';

@Component({
  selector: 'app-alta-repartidor-pizza',
  templateUrl: './alta-repartidor-pizza.component.html',
  styleUrls: ['./alta-repartidor-pizza.component.css']
})
export class AltaRepartidorPizzaComponent implements OnInit {

  nacionalidad : {} | any;
  bandera : string = '';

  repartidorGroup : FormGroup | any;

  constructor(private fb : FormBuilder, private db : DataBaseService) {

    this.repartidorGroup = this.fb.group({
      'dni' : ['',[Validators.required, Validators.max(50000000)]],
      'nombre' : ['',[Validators.required]],
      'edad' : ['',[Validators.required, Validators.min(18)]],
      'capacidadTransporte' : ['',[Validators.required,Validators.min(1)]],
      'nacionalidad': ['',[Validators.required]],
      'unidadPropia' : ['',[Validators.required]]
    });

  }

  ngOnInit(): void {
  }

  obtenerNacionalidadRepartidor(paisSeleeccionado : any){
    this.nacionalidad = paisSeleeccionado;
    this.repartidorGroup.controls.nacionalidad.setValue(paisSeleeccionado.translations.spa.common);
    this.bandera = this.nacionalidad.flags.png;
  }

  async altaRepartidor(){
    let repartidor : Repartidor = this.repartidorGroup.value;
    console.log(repartidor);

    repartidor.nacionalidad = this.nacionalidad;

    let res = await this.db.alta(repartidor, 'repartidor');

    if (res){
      this.repartidorGroup.reset();
      alert('Se dio de alta el repartidor.');
    }
    else
      alert('No se dio de alta el repartidor.');
  }

}
