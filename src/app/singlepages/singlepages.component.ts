import { Component } from '@angular/core';

import { HeroService } from 'src/app/hero.service';

import { data } from 'src/assets/data';

@Component({
  selector: 'app-singlepages',
  templateUrl: './singlepages.component.html',
  styleUrls: ['./singlepages.component.css']
})
export class SinglepagesComponent {

  constructor(private hero:HeroService){}

  data=this.hero.givedata()

  single:any

 

  ngOnInit(){

    let id = Number(localStorage.getItem('id'))

    this.single = data.filter(e=>e.id===id)

    console.log("titles",this.single)

}



}
