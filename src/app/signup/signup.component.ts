import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup } from '@angular/forms';
import firebase from 'firebase/app';
import { Users } from '../model/Users';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public isDriver:boolean = false

  first_name: String= "f"
  last_name: String= "l"
  email = ""
  username: String= "u"
  psw: string= "p"
  phone: String= "p"
  birthday: String= "b"
  cni: String= "c"
  driver_license_number: String= "d"
  registration_number: String= "r"
  card_number: String= "c"
  car_brand: String= "c"
  commercial_type: String= "c"
  car_color: String= "c"

  signForm = new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    email: new FormControl(''),
    username: new FormControl(''),
    psw: new FormControl(''),
    phone:new FormControl(''),
    birthday: new FormControl(''),
    cni: new FormControl(''),
    driver_license_number: new FormControl(''),
    registration_number: new FormControl(''),
    card_number: new FormControl(''),
    car_brand: new FormControl(''),
    commercial_type: new FormControl(''),
    car_color: new FormControl(''),
  })

  constructor(public auth:AngularFireAuth, public firestore:AngularFirestore) { }

  ngOnInit(): void {
  }

  driver(){
    this.isDriver = !this.isDriver
    if (this.isDriver) {
      console.log("isDriver : true")
    } else {
      console.log("isDriver : false")
    }
  }

  onSubmit(){
    this.first_name = this.signForm.get('first_name')?.value
    this.last_name = this.signForm.get('last_name')?.value
    this.email = this.signForm.get('email')?.value
    this.username = this.signForm.get('username')?.value
    this.psw = this.signForm.get('psw')?.value
    this.phone = this.signForm.get('phone')?.value
    this.birthday = this.signForm.get('birthday')?.value
    this.cni = this.signForm.get('cni')?.value
    this.driver_license_number = this.signForm.get('driver_license_number')?.value
    this.registration_number = this.signForm.get('registration_number')?.value
    this.card_number = this.signForm.get('card_number')?.value
    this.car_brand = this.signForm.get('car_brand')?.value
    this.commercial_type = this.signForm.get('commercial_type')?.value
    this.car_color = this.signForm.get('car_color')?.value
  }

  loginWithGoogle() {
    this.onSubmit()
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(userCredential => {
      if(userCredential.user?.email != undefined){
        this.email = userCredential.user?.email
      }
      this.firestore.collection('users').add({
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        username: this.username,
        psw: this.psw,
        phone: this.phone,
        birthday: this.birthday,
        cni: this.cni,
        driver_license_number: this.driver_license_number,
        registration_number: this.registration_number,
        card_number: this.card_number,
        car_brand: this.car_brand,
        commercial_type: this.commercial_type,
        car_color: this.car_color
      })
    });
  }

  loginWithEmail() {
    this.onSubmit()
    this.auth.createUserWithEmailAndPassword(this.email, this.psw).then(userCredential => {
      this.firestore.collection('users').add({
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        username: this.username,
        psw: this.psw,
        phone: this.phone,
        birthday: this.birthday,
        cni: this.cni,
        driver_license_number: this.driver_license_number,
        registration_number: this.registration_number,
        card_number: this.card_number,
        car_brand: this.car_brand,
        commercial_type: this.commercial_type,
        car_color: this.car_color
      })
    });
  }


}
