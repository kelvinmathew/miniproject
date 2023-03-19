import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { CarpageComponent } from './pages/carpage/carpage.component';
import { BikepageComponent } from './pages/bikepage/bikepage.component';
import { SinglepagesComponent } from './singlepages/singlepages.component';
import { BookingpagesComponent } from './pages/bookingpages/bookingpages.component';
import { Singlepages1Component } from './pages/singlepages1/singlepages1.component';

const routes: Routes = [
  {
    path:'',component:HomepageComponent
  },
  {
    path:'home',component:HomepageComponent
  },
 
  {
    path:'signin',component:SigninComponent
  },
  {
    path:'signup',component:SignupComponent
  },
  {
    path:'contactus',component:ContactusComponent
  },
  {
    path:'carpage',component:CarpageComponent
  },
  {
    path:'bikepage',component:BikepageComponent
  },
  {
    path:'singlepages',component:SinglepagesComponent
  },
  {
    path:'bookingpages',component:BookingpagesComponent
  },
  {
    path:'singlepages1',component:Singlepages1Component
  },

 
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
