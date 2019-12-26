import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CarouselModule.forRoot(),
    WavesModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
