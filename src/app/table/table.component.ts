import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero'
import {HEROES} from '../mock-heroes'
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


  // public data;

  // constructor(private http: Http) {
  // }
  constructor( http: Http) {
    http.get('mock-heros.json').subscribe((data) => this.data = data.json());
  }

  ngOnInit(): void {

    // this.http.get('mock-heros.json')
    // .subscribe((data) => {
    //   setTimeout(() => {
    //     this.data = data.json();
    //   }, 1000);
    // });
  }

}
