import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserPerfil } from '../interface/user-perfil';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged : boolean = false;
  perfil : string = '';
  usuarioLogueado : any;
  private currentUserSubject: BehaviorSubject<UserPerfil> = new BehaviorSubject({} as UserPerfil);
  public readonly currentUser: Observable<UserPerfil> = this.currentUserSubject.asObservable();

  constructor() { }

  setCurrentUser(currentUser: UserPerfil): void {
    this.currentUserSubject.next(currentUser);
  }
}
