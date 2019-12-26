import { Component, OnInit } from '@angular/core';
import { formatDate } from "@angular/common";


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  public birthdate : Date;
  public age  : number;

  constructor() {
    this.birthdate = new Date(1999,5,26);
    this.CalculateAge();
   }

  ngOnInit() {
  }

  public CalculateAge(): void
  {
      if(this.birthdate){
         var timeDiff = Math.abs(<any>Date.now() - <any>(this.birthdate));
         //Used Math.floor instead of Math.ceil
         //so 26 years and 140 days would be considered as 26, not 27.
         this.age = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
     }
 }

}
