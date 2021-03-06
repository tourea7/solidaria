import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'solidaria';
  isAuth = false
  constructor(public authService: AuthService){
    authService.isAuth.subscribe( value => this.isAuth = value)
    
  }
}
