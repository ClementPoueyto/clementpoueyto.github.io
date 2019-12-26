import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.css'],
  providers : [BlogService]

})
export class CompetenceComponent implements OnInit {
  competences = [
    {title: ''},
    {description: ''},
    {pourcentage:''},
    {image:''},
    {langue: ''},
    {outil :''},
    {langage:''}
  ];
  constructor(private api:BlogService) { 
    this.getCompetences();

  }

  ngOnInit() {
  }


  getCompetences = () => {
    this.api.getAllCompetences().subscribe(
      data => {
        this.competences = data;
      },
      error => {
        console.log(error);
      }
    )
  }
}
