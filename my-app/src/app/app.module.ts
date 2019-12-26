import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { FormationComponent } from './formation/formation.component';


import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProfilComponent } from './profil/profil.component';
import { ProjetComponent } from './projet/projet.component';
import { ButtonsModule, WavesModule, CollapseModule } from 'angular-bootstrap-md'
import { NgCircleProgressModule } from 'ng-circle-progress';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { CompetenceComponent } from './competence/competence.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormationComponent,
    ProfilComponent,
    ProjetComponent,
    CompetenceComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ScrollToModule.forRoot(),
    ButtonsModule.forRoot(),
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 50,
      outerStrokeWidth: 8,
      showInnerStroke:false,
      animationDuration: 500,
      showImage:true,
      animation : true,
      imageHeight:70,
      imageWidth:70,
      showBackground:true,
      showTitle:false
      
    })
    
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    NavbarComponent,
    FormationComponent,
    ProjetComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
  
})
export class AppModule { }
