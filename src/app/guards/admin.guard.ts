import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '../servicios/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  private authServiceSubscription: Subscription | undefined;
  perfil = '';

  constructor(private auth : AuthService, private route: Router){
    this.authServiceSubscription = this.auth.currentUser.subscribe(
      currentUser => {
        this.perfil = currentUser.perfil;
      }
    );
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this.perfil == 'admin'){
        return true;
      }
      else{
        this.route.navigateByUrl('');
        return false;
      }

  }
  
}
