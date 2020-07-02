import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoItemService } from './../shared/todo-item.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-todo-items',
  templateUrl: './create-todo-items.component.html',
  styles: [
  ]
})
export class CreateTodoItemsComponent implements OnInit {

  constructor(public service: TodoItemService
    ,private router: Router) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(myForm?: NgForm) {
    if(myForm != null){
      myForm.form.reset();
    }
    this.service.formData = {
      TodoId: 0,
      TodoDesc: '',
      TodoDate: null,
      TodoTime: null
    }
  }

  onSubmit() {
    this.service.formData.TodoDate = this.formatDate(this.service.formData.TodoDate);
    this.insertRecord();
  }
  insertRecord() {
    this.service.postTodoItems().subscribe(
      res => {
        this.resetForm();
        this.service.refreshList();
        this.router.navigate(['']);
      },
      err => { console.log(err); }
    )
  }

  formatDate(date) {
    var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();
  
  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;
  
  return [year, month, day].join('-');}
}
