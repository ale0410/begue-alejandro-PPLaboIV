import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  estaLoggeado : boolean = false;
  perfil : string = '';

  private authServiceSubscription: Subscription | undefined;

  constructor(private auth : AuthService,private route : Router) {
    this.authServiceSubscription = this.auth.currentUser.subscribe(
      currentUser => {
        this.estaLoggeado = currentUser.isLogged;
        this.perfil = currentUser.perfil;
      }
    );
  }

  ngOnInit(): void {
  }

  logOut() : void{
    this.auth.setCurrentUser({perfil: '', isLogged:false});
    this.route.navigateByUrl('login');
  }

}
