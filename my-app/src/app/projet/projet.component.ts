import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css'],
  providers : [BlogService]
})
export class ProjetComponent implements OnInit {
  projets = [
    {title: ''},
    {description: ''},
    {date: ''},
    {github :''}
  ];
  constructor(private api:BlogService) {
    this.getProjets();
   }
  ngOnInit() {
  }

  getProjets = () => {
    this.api.getAllProjets().subscribe(
      data => {
        this.projets = data;
      },
      error => {
        console.log(error);
      }
    )
  }


}
