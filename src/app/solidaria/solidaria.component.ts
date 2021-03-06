import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Ride } from '../model/Ride';

@Component({
  selector: 'app-solidaria',
  templateUrl: './solidaria.component.html',
  styleUrls: ['./solidaria.component.css']
})
export class SolidariaComponent implements OnInit {

  test: Ride[] = [];
  isAuth = false
  constructor( private router:Router, public authService: AuthService) {
    authService.isAuth.subscribe( value => this.isAuth = value)
   }

  ngOnInit(): void {

    this.test.push(
      new Ride().builder("Bassam", "Treichville", "2021-02-05", "7:00", "2000", 2)
    );
    this.test.push(
      new Ride().builder("Yopougon", "Treichville", "2021-02-08", "9:00", "1000", 4)
    );
    this.test.push(
      new Ride().builder("Bingerville", "Treichville", "2021-07-13", "12:00", "1000", 3)
    );
  }

  navigateToDailyride(){
    this.router.navigate(['dailyride'])
  }

  navigateToSuggestride(){
    this.router.navigate(['suggestride'])
  }


}
