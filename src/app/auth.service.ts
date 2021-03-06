import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Users, UsersInterface } from './model/Users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth = new BehaviorSubject<boolean>(false)
  userObservable: Observable<UsersInterface | undefined> | undefined;
  constructor() { }
}
