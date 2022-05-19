import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/clases/usuario'; 
import { FirestoreService } from 'src/app/servicios/firestore.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nacionalidad : {} | any;
  bandera : string = '';
  

  formGroup :  FormGroup | any;

  constructor(private fb : FormBuilder, public db : FirestoreService) { 
    this.formGroup = this.fb.group({
      'usuario' : ['',[Validators.required, this.spacesValidator]],
      'contraseña': ['',[Validators.required, Validators.minLength(4)]],
      'edad' :['',[Validators.required, Validators.min(12), Validators.max(99)]],
      'sexo' : ['',[Validators.required]],
      'nacionalidad' : ['',[Validators.required]],
      'bandera' : ''
    });
  }

  ngOnInit(): void {}

  obtenerNacionalidadActor(paisSeleeccionado : any){
    this.nacionalidad = paisSeleeccionado;
    this.formGroup.controls.nacionalidad.setValue(paisSeleeccionado.translations.spa.common); 
    this.bandera = this.nacionalidad.flags.png; 

  }

  async altaActor(){
    let usuario : Usuario = this.formGroup.value;

    // //Seteo de campos:
    // actor.nombre = this.formGroup.value.nombre;
    // actor.apellido = this.formGroup.value.apellido;
    // actor.alias = this.formGroup.value.alias;
    // actor.edad = this.formGroup.value.edad;
    // actor.sexo = this.formGroup.value.sexo;
    usuario.nacionalidad = this.nacionalidad;
    
    let res = await this.db.alta(usuario,'Actor');
    
    if(res){
      this.formGroup.reset();
    }

  }

   // CUSTOM VALIDATOR
   private spacesValidator(control: AbstractControl): null | object {
    const nombre = <string>control.value;
    const spaces = nombre.includes(' ');

    return spaces
      ? { containsSpaces: true }
      : null; 
  }

}
