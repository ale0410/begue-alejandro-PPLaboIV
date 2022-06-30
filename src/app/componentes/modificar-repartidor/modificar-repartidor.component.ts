import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pizza } from 'src/app/clases/pizza';
import { DataBaseService } from 'src/app/servicios/data-base.service';

@Component({
  selector: 'app-modificar-repartidor',
  templateUrl: './modificar-repartidor.component.html',
  styleUrls: ['./modificar-repartidor.component.css']
})
export class ModificarRepartidorComponent implements OnInit {

  modificarPizzaGroup : FormGroup | any;
  @Input() inputPizza : Pizza | any;

  constructor(private fb : FormBuilder, private db : DataBaseService) {

    this.modificarPizzaGroup = this.fb.group({
      'nombre' : ['',[Validators.required]],
      'ingredientes' : ['',[Validators.required]],
      'precio' :[0,[Validators.required, Validators.min(500)]],
      'peso' :[0,[Validators.required, Validators.min(500), Validators.max(1000)]],
    });

    if(this.inputPizza){
      this.modificarPizzaGroup.controls.setValue({
        'nombre': this.inputPizza.nombre,
        'ingredientes': this.inputPizza.ingredientes,
        'precio': this.inputPizza.precio,
        'peso': this.inputPizza.peso,
      });
    }

  }
  ngOnInit(): void {}

  modificarPizza(){
    this.db.update('Pizzas', this.inputPizza.id, this.modificarPizzaGroup.value)
    .then(()=>{
      alert('Se modificó una Pizza.');
    })
    .catch((error) =>{
      alert('No se modificó la pizza por ' + error)
    });
  }

}
