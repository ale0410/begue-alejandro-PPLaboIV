import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/app/clases/pizza';

@Component({
  selector: 'app-salen-pizzas',
  templateUrl: './salen-pizzas.component.html',
  styleUrls: ['./salen-pizzas.component.css']
})
export class SalenPizzasComponent implements OnInit {

  pizzaSeleccionada : Pizza | any;

  constructor() { }

  ngOnInit(): void {
  }

  getPizza(pizza : Pizza){
    this.pizzaSeleccionada = pizza;
  }

}
