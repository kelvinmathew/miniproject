import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnitsComponent } from './units/units.component';
import { PagesComponent } from './pages/pages.component';
import { NavbarComponent } from './units/navbar/navbar.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { CarpageComponent } from './pages/carpage/carpage.component';
import { SinglepagesComponent } from './singlepages/singlepages.component';
import { BikepageComponent } from './pages/bikepage/bikepage.component';
import { FooterComponent } from './units/footer/footer.component';
import { Singlepages1Component } from './pages/singlepages1/singlepages1.component';
import { BookingpagesComponent } from './pages/bookingpages/bookingpages.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat'





@NgModule({
  declarations: [
    AppComponent,
    UnitsComponent,
    PagesComponent,
    NavbarComponent,
    HomepageComponent,
    SigninComponent,
    SignupComponent,
    ContactusComponent,
    CarpageComponent,
    SinglepagesComponent,
    BikepageComponent,
    FooterComponent,
    Singlepages1Component,
    BookingpagesComponent,
    
   
  
    
   
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
