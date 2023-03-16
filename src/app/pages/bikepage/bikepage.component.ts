import { Component } from '@angular/core';
import {Route,ActivatedRoute, Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-bikepage',
  templateUrl: './bikepage.component.html',
  styleUrls: ['./bikepage.component.css']
})
export class BikepageComponent {

  constructor(private router: Router,private hero:HeroService) { }
  carpage=this.hero.givedata();
navigateToNextPage(id:any) {
  
localStorage.setItem('id',id);
this.router.navigate(['/singlepages1']);
    
     
    
 }

}
