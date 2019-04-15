import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerieRoutingModule } from './serie.routing.module';
import { SerieComponent } from './serie.component';
import { SerieDetailComponent } from './serie-detail/serie-detail.component';
import { SerieService } from './serie.service';
import { SerieEditComponent } from './serie-detail/serie-edit/serie-edit.component';

@NgModule({
  declarations: [
    SerieComponent,
    SerieDetailComponent,
    SerieEditComponent
  ],
  imports: [
    CommonModule,
    SerieRoutingModule
  ],
  providers: [
    SerieService
  ]
})
export class SerieModule { }
