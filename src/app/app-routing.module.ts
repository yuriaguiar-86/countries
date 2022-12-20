import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCountriesComponent } from './list-countries/list-countries.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SpecificComponent } from './specific/specific.component';

const routes: Routes = [
  { path: '', component: ListCountriesComponent },
  { path: 'countries', component: ListCountriesComponent },
  { path: 'countries/:name', component: SpecificComponent },
  { path: ':name', component: SpecificComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
