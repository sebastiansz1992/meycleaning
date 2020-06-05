import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeycleaningComponent } from './container/meycleaning/meycleaning.component';

const routes: Routes = [
  { path: '', component: MeycleaningComponent },
  { path: 'home', component: MeycleaningComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeycleaningRoutingModule { }
