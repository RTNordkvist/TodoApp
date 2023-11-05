import { Component } from '@angular/core';
import { Todo } from '../todo'
import { TodoService } from '../todo.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent {

  todo = <Todo>{};

  createTodoForm = this.formBuilder.group({
    description: ''
  });

  constructor(
    private todoService: TodoService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.todo.text = "";
  };

  async handleSave() {
    await this.todoService.createTodo(this.todo);
    this.router.navigateByUrl('/')
  }
}
