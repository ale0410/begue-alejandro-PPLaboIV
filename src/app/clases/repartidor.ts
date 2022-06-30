
export class Repartidor {
    dni : number = 0;
    nombre : string = '';
    edad : number = 0;
    capacidadTransporte : number = 0;
    nacionalidad : {} = {};
    unidadPropia : boolean = false;

    constructor(id:number, name: string, age:number, capacity:number, nationality:{}, unity:boolean){
        this.dni = id;
        this.nombre = name;
        this.edad = age;
        this.capacidadTransporte = capacity;
        this.nacionalidad = nationality;
        this.unidadPropia = unity;
    }
}
