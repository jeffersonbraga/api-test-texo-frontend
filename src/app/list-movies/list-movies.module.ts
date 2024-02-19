import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";
import {ListMoviesComponent} from "./list-movies.component";
import {FormsModule} from "@angular/forms";
import {PageNavigatorComponent} from "../components/page-navigator/page-navigator.component";

@NgModule({
  declarations: [
    ListMoviesComponent,
    PageNavigatorComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    ListMoviesComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ]
})
export class ListMoviesModule { }
