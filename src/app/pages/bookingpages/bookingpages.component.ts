import { Component } from '@angular/core';
import { Firestore ,collection } from '@angular/fire/firestore';
import { AuthService } from 'src/app/shared/auth.service';


@Component({
  selector: 'app-bookingpages',
  templateUrl: './bookingpages.component.html',
  styleUrls: ['./bookingpages.component.css']
})
export class BookingpagesComponent {

  name:string='';
  email:string='';
  number:string='';
  message:string='';
  pick:string='';
  brand:string='';
  carbike:string='';
  street:string='';
  city:string='';
  state:string='';
  cash:string='';
  
constructor(private fire:Firestore,public auth:AuthService){}
book()
{
  const data={
  name:this.name,
  email:this.email,
  number: this.number,
  message:this.message,
  pick:this.pick,
  brand:this.brand,
  carbike:this.carbike,
  street:this.street,
  city:this.city,
  state:this.state,
  cash:this.cash,
  }
  console.log(data);
  const docRef=collection(this.fire,"booking")
  this.auth.book(docRef,data)
  this.name=''
  this.email=''
  this.number=''
  this.message=''
  this.pick=''
  this.brand=''
  this.carbike=''
  this.street=''
  this.city=''
  this.state=''
  this.cash=''
  alert('success')
}





}
