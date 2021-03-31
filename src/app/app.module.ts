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
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailComponent } from './detail/detail.component';
import { BuyComponent } from './buy/buy.component';
import { DriverinfoComponent } from './driverinfo/driverinfo.component';
import { MapComponent } from './map/map.component';
import {AgmCoreModule} from '@agm/core';


const appRoutes: Routes = [
{ path: 'login' , component: LoginComponent },
{ path: 'solidaria' , component: SolidariaComponent },
{ path: 'dailyride' , component: DailyrideComponent},
{ path: 'suggestride' , component: SuggestrideComponent},
{ path: 'signup' , component:  SignupComponent },
{path: 'detail' , component: DetailComponent},
{path: 'map' , component: MapComponent},
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
    CardComponent,
    DetailComponent,
    BuyComponent,
    DriverinfoComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDi35iwEpU80wr-xxR8oCeOSw92QZQ-pKQ'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
