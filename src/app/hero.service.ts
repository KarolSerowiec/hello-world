import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import {Http, Response} from "@angular/http";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HeroService {

  constructor(private _http: Http) {

  }
  getHeroes2(): Observable<Hero[]> {
    return this._http.get('src/app/mock-heros.json').map((response: Response)=> <Hero[]>response.json());
  }


  getHeroes(): Hero[] {
    return HEROES;
  }

}

