import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Ride, RideInterface } from '../model/Ride';

@Component({
  selector: 'app-dailyride',
  templateUrl: './dailyride.component.html',
  styleUrls: ['./dailyride.component.css']
})
export class DailyrideComponent implements OnInit {

  test: Set<Ride> = new Set();
   constructor(public firestore:AngularFirestore, private router:Router) { }

  ngOnInit(): void {

    this.firestore.collection<RideInterface>("rides").snapshotChanges().subscribe(rides =>{
      rides.forEach(r => {
          let ride = new Ride()
          ride.fromInterface(r.payload.doc.data())
          this.test.add(ride)
        })
    })
    this.test.add(
      new Ride().builder("Bassam", "Treichville", "2021-02-05", "7:00", "2000", 2)
    );
    this.test.add(
      new Ride().builder("Yopougon", "Treichville", "2021-02-08", "9:00", "1000", 4)
    );
    this.test.add(
      new Ride().builder("Bingerville", "Treichville", "2021-07-13", "12:00", "1000", 3)
    );
  }


  navigateToSuggestride(){
    this.router.navigate(['suggestride'])
  }
}
