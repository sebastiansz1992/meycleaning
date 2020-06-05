import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeycleaningRoutingModule } from './meycleaning-routing.module';
import { MeycleaningComponent } from './container/meycleaning/meycleaning.component';

@NgModule({
  declarations: [
    MeycleaningComponent
  ],
  imports: [
    CommonModule,
    MeycleaningRoutingModule
  ]
})
export class MeycleaningModule { }
