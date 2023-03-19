import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service'; 


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  email : string = '';
  password : string = '';
  constructor(private auth : AuthService) {}

   signin() {
     if(this.email == '') {
         alert('please enter the email');
         return;

     }

     if(this.password == '') {
      alert('please enter the email');
      return;

          }

      this.auth.signin(this.email,this.password);
      
      this.email = '';
      this.password = '';


   }



}
