import { TodoItem } from './todo-item.model'
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoItemService {
  formData: TodoItem; 
  list: TodoItem[];

  constructor(private http: HttpClient) { }

  postTodoItems() {
    return this.http.post('https://localhost:5001/api/TodoItems', this.formData);
  }
  
  getTodoForEdit() {
    return this.http.get('https://localhost:5001/api/TodoItems').toPromise();
  }

  refreshList(){
    return this.http.get('https://localhost:5001/api/TodoItems')
    .toPromise()
    .then(res => {
      this.list = res as TodoItem[];
      console.log(this.list);
    });
  }
}
