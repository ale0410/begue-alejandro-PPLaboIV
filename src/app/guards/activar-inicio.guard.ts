import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '../servicios/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ActivarInicioGuard implements CanActivate {
  private authServiceSubscription: Subscription | undefined;
  estaLoggeado : boolean = false;

  constructor(private auth : AuthService, private route: Router){
    this.authServiceSubscription = this.auth.currentUser.subscribe(
      currentUser => {
        this.estaLoggeado = currentUser.isLogged;
      }
    );
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(!this.estaLoggeado){
      return true;
    }
    else{
      this.route.navigateByUrl('altaRepartidor');
      return false
    }

  }
  
}
