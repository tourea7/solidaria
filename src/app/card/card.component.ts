import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Ride } from '../model/Ride';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() ride:Ride = new Ride().builder("", "", "", "", "", 0);

  
  constructor(private router:Router, private authService: AuthService) { 
    
  }

  ngOnInit(): void {
  }

  navigateToDetail(){
    this.authService.rideSelected.next(this.ride)
    this.router.navigate(['detail'])
  }
}
