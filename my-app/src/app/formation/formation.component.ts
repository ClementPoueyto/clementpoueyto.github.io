import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css'],
  providers : [BlogService]
})
export class FormationComponent implements OnInit {
  formations = [
  {title: ''},
  {description: ''},
  {date: ''}
];

  constructor(private api:BlogService) {
    this.getFormations();
   }
  ngOnInit() {
  }

  getFormations = () => {
    this.api.getAllFormations().subscribe(
      data => {
        this.formations = data;
      },
      error => {
        console.log(error);
      }
    )
  }

}
