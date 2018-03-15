import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero'
import {HEROES} from '../mock-heroes'
import {HeroService} from '../hero.service';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'

// C:\WORK\Angular\angular-tour-of-heroes\src\app\mock-heros.json

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }
  heroes = HEROES;

  titles = ["id", "namme"];

  // data2: Hero[];

  data;

  constructor(private http:Http) {
    this.http.get('assets/mock-heros.json')
    .subscribe(res => this.data = res.json());
  }

  // constructor(private _heroService: HeroService){
  //
  // }
  ngOnInit(): void {
    // this._heroService.getHeroes2()
    //     .subscribe((heroData)=> this.data2 = heroData);
  }



















  // tablica;
  // constructor(private http:Http) {
  //   this.http.get('C:\\WORK\\Angular\\angular-tour-of-heroes\\src\\app\\mock-heros.json')
  //   .subscribe(res => this.tablica = res.json());
  // }

  // public data;

  // constructor(private http: Http) {
  // }
  // constructor( http: Http) {
  //   http.get('mock-heros.json').subscribe((data) => this.data = data.json());
  // }



}
