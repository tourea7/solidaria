import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Ride } from '../model/Ride';
import { Users } from '../model/Users';


@Component({
  selector: 'app-suggestride',
  templateUrl: './suggestride.component.html',
  styleUrls: ['./suggestride.component.css']
})
export class SuggestrideComponent implements OnInit {

  departure: String = "" 
  arrive: String = ""
  date: String= ""
  hours: String = ""
  price: String = "500"
  seat: number = 0
  user = new Users()

  rideForm = new FormGroup({

    departure: new FormControl(''),
    arrive: new FormControl(''),
    date: new FormControl(''),
    hours: new FormControl(''),
    seat: new FormControl(''),
    
  })

  constructor(public firestore:AngularFirestore, public router: Router, public authService: AuthService) {
    authService.userObservable?.subscribe(value => {
      this.user.fromInterface(value!)
    })
   }

  onSubmit(){
    
    this.departure = this.rideForm.get('departure')?.value
    this.arrive = this.rideForm.get('arrive')?.value
    this.date = this.rideForm.get('date')?.value
    this.hours = this.rideForm.get('hours')?.value
    this.seat = this.rideForm.get('seat')?.value as number

    this.firestore.collection('rides').add({
      departure: this.departure,
      arrive: this.arrive,
      date: this.date,
      hours: this.hours,
      price: this.price,
      seat: this.seat,
      username: this.user.username,
      email: this.user.email,
    })
    this.router.navigate(['solidaria'])
  }

  ngOnInit(): void {
   
  }

}
