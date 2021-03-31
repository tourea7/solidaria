import { Component, OnInit } from '@angular/core';
import {AgmCoreModule} from '@agm/core';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  lat: 51.678418;
  lng: 7.809007;
  locationChosen = false;
  
  
  constructor( public AgmCore:AgmCoreModule ) { }
  
  onChoseLocation(event) {
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    this.locationChosen = true;
  }

  ngOnInit(): void {
  }

}
