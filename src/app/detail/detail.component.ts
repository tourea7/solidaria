import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Ride } from '../model/Ride';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  ride: Ride= new Ride().builder("", "", "", "", "", 0)

  constructor(private authService: AuthService) {
    authService.rideSelected.subscribe(value => this.ride = value)
   }

  ngOnInit(): void {
  }

}
