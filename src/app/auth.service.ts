import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Ride } from './model/Ride';
import { Users, UsersInterface } from './model/Users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth = new BehaviorSubject<boolean>(false)
  rideSelected = new BehaviorSubject<Ride>(new Ride().builder("", "", "", "", "", 0))
  userObservable: Observable<UsersInterface | undefined> | undefined;
  constructor() { }
}
