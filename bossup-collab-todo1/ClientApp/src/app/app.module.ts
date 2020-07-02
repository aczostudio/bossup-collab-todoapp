import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule, matDatepickerAnimations  } from '@angular/material/datepicker';

import { TodoItemService } from './shared/todo-item.service';

import { AppComponent } from './app.component';
import { TodoItemsComponent } from './todo-items/todo-items.component';
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
    FormsModule,
    MatDatepickerModule
  ],
  providers: [
    TodoItemService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
