import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SolidariaComponent } from './solidaria/solidaria.component';
import { DailyrideComponent } from './dailyride/dailyride.component';
import { SuggestrideComponent } from './suggestride/suggestride.component';
import { SignupComponent } from './signup/signup.component';
import {RouterModule, Routes} from "@angular/router";
import { CardComponent } from './card/card.component';


const appRoutes: Routes = [
{ path: 'login' , component: LoginComponent },
{ path: 'solidaria' , component: SolidariaComponent },
{ path: 'dailyride' , component: DailyrideComponent},
{ path: 'suggestride' , component: SuggestrideComponent},
{ path: 'signup' , component:  SignupComponent },
{ path:'' , component: SolidariaComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SolidariaComponent,
    DailyrideComponent,
    SuggestrideComponent,
    SignupComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
