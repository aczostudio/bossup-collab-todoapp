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
    //this.service.refreshList(this.list);
    this.sub = this.acroute.params.subscribe(params => {
      this.id = +params['id'];
      console.log("Id"+this.id);
    });
    this.openEdit(this.id);
  }
  openEdit(openid:number): void {
    this.editDesc.value = (this.service.list[openid].TodoDesc);
    this.editDate.value = (this.service.list[openid].TodoDate);
    this.editTime.value = (this.service.list[openid].TodoTime);
  }
  onEdit(): void {
    console.log("On Edit"+this.id);
  }
}
