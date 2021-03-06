import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { AuthService } from '../auth.service';
import { Users, UsersInterface } from '../model/Users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = ""
  psw: string= "p"
  user = new Users()
  



  signForm = new FormGroup({
    
    email: new FormControl(''),
    psw: new FormControl(''),
    
  })


  constructor(public auth:AngularFireAuth, public firestore:AngularFirestore, public router: Router, public authService: AuthService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    
    this.email = this.signForm.get('email')?.value
    this.psw = this.signForm.get('psw')?.value
  }

  loginWithGoogle() {
    this.onSubmit()
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(async userCredential => {
      this.authService.userObservable = this.firestore.collection("users").doc<UsersInterface>(userCredential.user?.uid)
      .valueChanges()
      this.authService.isAuth.next(true);
      this.firestore.collection("users").doc<UsersInterface>(userCredential.user?.uid)
      .get().subscribe( (document) => {
        console.log(document.data()?.first_name)
        this.user.fromInterface(document.data()!)
      })
      this.router.navigate(['solidaria'])
    });
  }

  loginWithEmail() {
    this.onSubmit()
    this.auth.signInWithEmailAndPassword(this.email, this.psw).then(userCredential => {
      this.authService.userObservable = this.firestore.collection("users").doc<UsersInterface>(userCredential.user?.uid)
      .valueChanges()
      this.authService.isAuth.next(true);
      this.firestore.collection("users").doc<UsersInterface>(userCredential.user?.uid)
      .get().subscribe( (document) => {
        console.log(document.data()?.first_name)
        this.user.fromInterface(document.data()!)
        
      })
      this.router.navigate(['solidaria'])
    });
  }
}
