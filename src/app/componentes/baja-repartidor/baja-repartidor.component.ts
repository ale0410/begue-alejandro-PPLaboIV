import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Pizza } from 'src/app/clases/pizza';
import { DataBaseService } from 'src/app/servicios/data-base.service';

@Component({
  selector: 'app-baja-repartidor',
  templateUrl: './baja-repartidor.component.html',
  styleUrls: ['./baja-repartidor.component.css']
})
export class BajaRepartidorComponent implements OnInit {

  @Input() inputPizza : Pizza | any;
  deletePizzaGroup : FormGroup | any;

  constructor(private fb : FormBuilder, private db: DataBaseService) {
    this.deletePizzaGroup = this.fb.group({
      'nombre' : ['',[Validators.required]],
      'check' : ['',[Validators.required]]
    });

    if(this.inputPizza){
      this.deletePizzaGroup.controls['nombre'].setValue(this.inputPizza.nombre);
    }
  }

  ngOnInit(): void {}

  deletePizza(){
    this.db.delete('Pizzas', this.inputPizza.id);
  }

}
