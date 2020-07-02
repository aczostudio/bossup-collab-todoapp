import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';
import { TodoItemService } from './../shared/todo-item.service'
import { Router, ActivatedRoute } from '@angular/router';
import { TodoItem } from '../shared/todo-item.model';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';


@Component({
  selector: 'app-edit-todo-items',
  templateUrl: './edit-todo-items.component.html',
  styles: [
  ]
})
export class EditTodoItemsComponent implements OnInit {
  id: any;
  private sub: any;
  list: TodoItem[];

  editDesc: Placeholder;
  editDate: Placeholder;
  editTime: Placeholder;

  constructor(public service: TodoItemService
    ,private router: Router,private acroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.openEdit();
  }

  openEdit(): void {
    this.service.getTodoForEdit().then(res => {
      this.list = res as TodoItem[];
      this.sub = this.acroute.params.subscribe(params => {
        this.id = +params['id'];
        console.log("Id"+this.id);
      });
      
      this.list.forEach(element => {
        if(element.TodoId == this.id){
          this.editDesc.value = element.TodoDesc;
          this.editDate.value = element.TodoDate;
          this.editTime.value = element.TodoTime;
        }
      });

    })
  }
  onEdit(): void {
    console.log("On Edit"+this.id);
  }
}
