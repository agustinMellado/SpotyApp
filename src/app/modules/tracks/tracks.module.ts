import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TracksRoutingModule } from './tracks-routing.module';
import { TracksPagesComponent } from './pages/tracks-pages/tracks-pages.component';


@NgModule({
  declarations: [
    TracksPagesComponent
  ],
  imports: [
    CommonModule,
    TracksRoutingModule
  ]
})
export class TracksModule { }
