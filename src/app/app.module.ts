import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HeroesComponent} from './heroes/heroes.component';
import {FormsModule} from '@angular/forms';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroService} from "./hero.service";
import {TableComponent} from './table/table.component';
import { DataTableModule } from 'angular2-datatable';
import { HttpModule } from '@angular/http';
import { Table2Component } from './table2/table2.component';
import { Ng2TableModule } from 'ng2-table/ng2-table';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    TableComponent,
    Table2Component,


  ],
  imports: [
    BrowserModule,
    DataTableModule,
    HttpModule,
    FormsModule,
    Ng2TableModule,

  ],

  providers: [
    HeroService,
    /* . . . */
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
}
