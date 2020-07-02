import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../shared/todo-item.model';
import { NgForm } from '@angular/forms';
import { TodoItemService } from './../shared/todo-item.service'

@Component({
  selector: 'app-create-todo-items',
  templateUrl: './create-todo-items.component.html',
  styles: [
  ]
})
export class CreateTodoItemsComponent implements OnInit {

  constructor(public service: TodoItemService) { }
  formData: TodoItem;

  ngOnInit() {
    this.resetForm();
  }

  resetForm(myForm?: NgForm) {
    if(myForm != null){
      myForm.form.reset();
    }
    this.service.formData = {
      id: 0,
      todoDesc: '',
      todoDate: (new Date),
      todoTime: (new Date),
    }
  }

}
