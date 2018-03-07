import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HeroesComponent} from './heroes/heroes.component';
import {FormsModule} from '@angular/forms';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroService} from "./hero.service";
import {TableComponent} from './table/table.component';
import { DataTableModule } from "angular2-datatable";
import { HttpModule } from "@angular/http";


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    TableComponent,


  ],
  imports: [
    BrowserModule,
    DataTableModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    HeroService,
    /* . . . */
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
