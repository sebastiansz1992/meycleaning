import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeycleaningRoutingModule } from './meycleaning-routing.module';
import { MeycleaningComponent } from './container/meycleaning/meycleaning.component';
import { HomeComponent } from './pages/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    MeycleaningComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MeycleaningRoutingModule,
    FontAwesomeModule
  ]
})
export class MeycleaningModule { }
