export class Pizza {

    'nombre' : string;
    'ingredientes': string;
    'precio': number;
    'peso': number;
  
    constructor(name:string, ingredients:string, price:number, weight:number){
      this.nombre = name;
      this.ingredientes = ingredients;
      this.precio = price;
      this.peso = weight;
    }
  }
