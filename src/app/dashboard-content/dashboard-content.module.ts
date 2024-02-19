import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardContentComponent} from "./dashboard-content.component";
import {MultipleWinnersComponent} from "../components/multiple-winners/multiple-winners.component";
import {TopStudioWinnersComponent} from "../components/top-studio-winners/top-studio-winners.component";
import {ProducersIntervalWinComponent} from "../components/producers-interval-win/producers-interval-win.component";
import {MovieWinnerByYearComponent} from "../components/movie-winner-by-year/movie-winner-by-year.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    DashboardContentComponent,
    MultipleWinnersComponent,
    TopStudioWinnersComponent,
    ProducersIntervalWinComponent,
    MovieWinnerByYearComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    DashboardContentComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
  ]
})
export class DashboardContentModule { }
