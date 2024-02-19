import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardContentComponent} from "./dashboard-content/dashboard-content.component";
import {ListMoviesComponent} from "./list-movies/list-movies.component";

const routes: Routes = [
  { path: '', component: DashboardContentComponent },
  { path: 'dashboards', component: DashboardContentComponent },
  { path: 'list', component: ListMoviesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
