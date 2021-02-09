import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SolidariaComponent } from './solidaria/solidaria.component';
import { DailyrideComponent } from './dailyride/dailyride.component';
import { SuggestrideComponent } from './suggestride/suggestride.component';
import { SignupComponent } from './signup/signup.component';
import {Routes}  from "@angular/router";


const appRoutes: Routes = [
{ path: 'login' , component: LoginComponent },
{ path: 'solidaria' , component: SolidariaComponent },
{ path: 'dailyride' , component: DailyrideComponent},
{ path: 'suggestride' , component: SuggestrideComponent},
{ path: 'signup' , component:  SignupComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SolidariaComponent,
    DailyrideComponent,
    SuggestrideComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
