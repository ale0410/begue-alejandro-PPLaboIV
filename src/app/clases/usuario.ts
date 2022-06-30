export class Usuario {
    dni : number = 0;
    nombre : string = '';
    edad : number = 0;
    email : string = '';
    nacionalidad : {} = {};
    password : string = '';

    constructor(id:number, name: string, age:number, email:string, nationality:{}, password:string){
        this.dni = id;
        this.nombre = name;
        this.edad = age;
        this.email = email;
        this.nacionalidad = nationality;
        this.password = password;
    }
}
