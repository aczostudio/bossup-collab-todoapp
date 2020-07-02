import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoItemsComponent } from './todo-items/todo-items.component'
import { CreateTodoItemsComponent } from './create-todo-items/create-todo-items.component'
import { EditTodoItemsComponent } from './edit-todo-items/edit-todo-items.component';


const routes: Routes = [
  { path: '', component: TodoItemsComponent },
  { path: 'createtodo', component: CreateTodoItemsComponent},
  { path: 'edittodo/:id', component: EditTodoItemsComponent},


  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
