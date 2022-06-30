import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pizza } from 'src/app/clases/pizza';
import { DataBaseService } from 'src/app/servicios/data-base.service';

@Component({
  selector: 'app-pizzas-listado',
  templateUrl: './pizzas-listado.component.html',
  styleUrls: ['./pizzas-listado.component.css']
})
export class PizzasListadoComponent implements OnInit {

  listadoPizzas : Pizza[] =  [];
  @Output() pizzaSelecionada : EventEmitter<Pizza> = new EventEmitter<Pizza>();

  constructor(private db : DataBaseService) {}

  ngOnInit(): void {
    //Listado de pizzas
    this.db.getCollection('Pizzas')
    .then((res:any)=>{
      res.subscribe((ref:any)=>{
        this.listadoPizzas = ref.map((element:any) => {
          let pizza = element.payload.doc.data();
          pizza['id'] = element.payload.doc.id;
          return pizza;
        });
      })
    })
    .catch(error=>console.log(error));
  }

  seleccionPizzaEmit(pizza: Pizza){
    this.pizzaSelecionada.emit(pizza);
    console.log(pizza)
  }

}
