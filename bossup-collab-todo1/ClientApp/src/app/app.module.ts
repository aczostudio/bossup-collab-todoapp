import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoItemsComponent } from './todo-items/todo-items.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoItemService } from './shared/todo-item.service';
import { FormsModule } from '@angular/forms';
import { CreateTodoItemsComponent } from './create-todo-items/create-todo-items.component'

@NgModule({
  declarations: [
    AppComponent,
    TodoItemsComponent,
    CreateTodoItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    TodoItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
