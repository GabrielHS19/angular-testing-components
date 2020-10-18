import { Component, OnInit } from '@angular/core';
import { TodosService } from './todos.service'
//import { Http } from '@angular/http/src/http';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.service.getTodos().subscribe(t => this.todos = t);
  }

}
