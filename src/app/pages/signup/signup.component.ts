import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  name : string = '';
  email : string = '';
  password : string = '';
constructor(private auth : AuthService){}

signup() {
  
  
  
  if(this.name == '') {
    alert('please enter the name');
    return;

}
     if(this.email == '') {
      alert('please enter the email');
      return;

  }

  if(this.password == '') {
   alert('please enter the email');
   return;

       }

   this.auth.signup(this.email,this.password,);
   
   this.email = '';
   this.password = '';
   


}



}