import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '../servicios/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterGuardGuard implements CanActivate, CanDeactivate<unknown> {

  private authServiceSubscription: Subscription | undefined;
  estaRegistrado! : string;

  constructor(private auth : AuthService, private route: Router){
    this.authServiceSubscription = this.auth.currentUser.subscribe(
      currentUser => {
        this.estaRegistrado = currentUser.perfil;
      }
    );
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(this.estaRegistrado !== null){
      return true;
    }
    else{
      this.route.navigateByUrl('register');
      return false;
    }
  }
  
}
