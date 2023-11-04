import { Component } from '@angular/core';
import { Todo } from '../todo'
import { TodoService } from '../todo.service';
import { FormBuilder } from '@angular/forms';

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
  ) {
    this.todo.text = "";
    console.log(this.todo.text);

  };

  async handleSave() {
    await this.todoService.createTodo(this.todo);
  }
}
