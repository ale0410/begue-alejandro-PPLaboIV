import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/clases/usuario';
import { DataBaseService } from '../../servicios/data-base.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  nacionalidad : {} | any;
  bandera : string = '';

  registerGroup : FormGroup | any;

  constructor(private fb : FormBuilder, private db : DataBaseService) {

    this.registerGroup = this.fb.group({
      'dni' : ['',[Validators.required, Validators.max(50000000)]],
      'nombre' : ['',[Validators.required]],
      'edad' : ['',[Validators.required, Validators.min(18)]],
      'email' : ['',[Validators.required]],
      'nacionalidad': ['',[Validators.required]],
      'password' : ['',[Validators.required]]
    });

  }

  ngOnInit(): void {
  }

  obtenerNacionalidadRepartidor(paisSeleeccionado : any){
    this.nacionalidad = paisSeleeccionado;
    this.registerGroup.controls.nacionalidad.setValue(paisSeleeccionado.translations.spa.common);
    this.bandera = this.nacionalidad.flags.png;
  }

  async altaRepartidor(){
    let register : Usuario = this.registerGroup.value;
    console.log(register);

    register.nacionalidad = this.nacionalidad;

    let res = await this.db.alta(register, 'register');

    if (res){
      this.registerGroup.reset();
      alert('Se dio de alta el usuario.');
    }
    else
      alert('No se dio de alta el usuario.');
  }

}
