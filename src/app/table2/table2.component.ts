import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";

@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.css']
})
export class Table2Component implements OnInit {

  public config:any = {
    paging: true,
    // sorting: {columns: this.columns},
    // filtering: {filterString: ''},
    className: ['table-bordered']
  };

  columns;
  rows;

  tasks;
  students;
  statuses;
  statusesFalse;

  constructor(private http:Http) {
    this.http.get('assets/mock-columns.json')
    .subscribe(res => this.columns = res.json());
    this.http.get('assets/mock-rows.json')
    .subscribe(res => this.rows = res.json());

    this.http.get('assets/taskList.json')
    .subscribe(res => this.tasks = res.json());
    this.http.get('assets/studentList.json')
    .subscribe(res => this.students = res.json());
    this.http.get('assets/statusPlaceHolderTable.json')
    .subscribe(res => this.statuses = res.json());
    this.http.get('assets/statusFalse.json')
    .subscribe(res => this.statusesFalse = res.json());

  }

  ngOnInit() {
  }

}
