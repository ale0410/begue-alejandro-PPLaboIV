import { Usuario } from "./usuario";

export class Repartidor {
    dni:string;
    nombre:string;
    edad:number;
    capacidadDeTransporte:number;
    paisOrigen:string;
    unidadPropia:boolean;

    public constructor(dni:string,nombre:string,edad:number,capacidadDeTransporte:number,paisOrigen:string,unidadPropia:boolean)
    {
        this.dni=dni;
        this.nombre=nombre;
        this.edad=edad;
        this.capacidadDeTransporte=capacidadDeTransporte;
        this.paisOrigen=paisOrigen;
        this.unidadPropia=unidadPropia;
    }
}
