import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../shared/todo-item.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styles: [
  ]
})
export class TodoItemsComponent implements OnInit {

  constructor(public service: HttpClient) { }
  tdItems: TodoItem[];
  ngOnInit() {
    this.service.get('https://localhost:5001/api/TodoItems').subscribe(
      data => {
        this.tdItems = data as TodoItem[];
      }
    )
  }
}
