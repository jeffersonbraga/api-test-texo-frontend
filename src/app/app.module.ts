import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {AppRoutingModule} from "./app-routing.module";
import {DashboardContentModule} from "./dashboard-content/dashboard-content.module";
import {HttpClientModule} from "@angular/common/http";
import {ListMoviesModule} from "./list-movies/list-movies.module";
import {MenuComponent} from "./menu/menu.component";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    DashboardContentModule,
    ListMoviesModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
