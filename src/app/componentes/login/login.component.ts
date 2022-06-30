import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  listadoUsuarios : [] | any;

  loginGroup : FormGroup | any;

  constructor(private fb : FormBuilder, private route: Router, private auth: AuthService) {

    this.loginGroup = fb.group({
      'email' : '',
      'password' : ''
    })

    this.listadoUsuarios = [
      {email: 'rosasanchez@gmail.com', password: '123456ad', perfil:'admin'},
      {email: 'juanperez@gmail.com', password: 'lalalaemp', perfil:'empleado'}
    ];
  }

  ngOnInit(): void {
  }

  cargarEmpleado(){
      this.loginGroup.controls.email.setValue(this.listadoUsuarios[1].email);
      this.loginGroup.controls.password.setValue(this.listadoUsuarios[1].password);
  }

  cargarAdmin(){
    this.loginGroup.controls.email.setValue(this.listadoUsuarios[0].email);
    this.loginGroup.controls.password.setValue(this.listadoUsuarios[0].password);
  }

  login(){
    if(this.loginGroup.value.email === 'rosasanchez@gmail.com' && this.loginGroup.value.password === '123456ad')
    {
      this.auth.setCurrentUser({perfil: 'admin', isLogged:true});
      this.route.navigate(['altaRepartidor']);
    }
    else if (this.loginGroup.value.password === 'juanperez@gmail.com' || this.loginGroup.value.password === 'lalalaemp'){
      this.auth.setCurrentUser({perfil: 'empleado', isLogged:true})
      this.route.navigate(['altaRepartidor']);
    }
    else{
      alert('No es un usuario válido');
    }

  }

  

}
