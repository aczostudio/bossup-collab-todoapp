import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatDatepickerModule, matDatepickerAnimations } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker'

import { TodoItemService } from './shared/todo-item.service';

import { AppComponent } from './app.component';
import { TodoItemsComponent } from './todo-items/todo-items.component';
import { CreateTodoItemsComponent } from './create-todo-items/create-todo-items.component';
import { EditTodoItemsComponent } from './edit-todo-items/edit-todo-items.component'

@NgModule({
  declarations: [
    AppComponent,
    TodoItemsComponent,
    CreateTodoItemsComponent,
    EditTodoItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMaterialTimepickerModule
  ],
  providers: [
    TodoItemService,
    MatDatepickerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
