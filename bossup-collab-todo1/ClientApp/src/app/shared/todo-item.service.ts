import { TodoItem } from './todo-item.model'
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoItemService {
  formData: TodoItem; 
  readonly rootURL = 'http://localhost:5001/api';
  list: TodoItem[];

  constructor(private http: HttpClient) { }

  refreshList(){
    this.http.get(this.rootURL + 'TodoItems')
    .toPromise()
    .then(res => this.list = res as TodoItem[]);
  }
}
