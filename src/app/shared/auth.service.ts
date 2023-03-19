import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import { addDoc } from '@firebase/firestore';



@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private fireauth : AngularFireAuth, private router : Router)  { }
  
 // signin method
   signin(email : string, password : string) {
    this.fireauth.signInWithEmailAndPassword(email,password).then( () => {
         localStorage.setItem('token','true');
         alert('Login succesfully')
         this.router.navigate(['home']);

    }, err => {
        alert(err.message);
        this.router.navigate(['/signin']);

    })
   }

    // signup method 
    signup(email : string, password : string) {
     this.fireauth.createUserWithEmailAndPassword(email, password).then( () => {
      alert('Signup Succesfully');
      this.router.navigate(['/signin']);
      
     }, err => {
         alert(err.message);
         this.router.navigate(['/signup']);


        })

    }
    //CONTACT

    submit(docRef:any,data:any){
      addDoc(docRef,data)
      .catch((err)=>alert(err))
    }
  
    
     //booking
     book(docRef:any,data:any){
      addDoc(docRef,data)
      .catch((err)=>alert(err))
    }

  }

  
