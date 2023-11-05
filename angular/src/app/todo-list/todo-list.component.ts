import { Component, ChangeDetectorRef } from '@angular/core';
import { Todo } from '../todo'
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  constructor(private todoService: TodoService) {  }

  ngOnInit() {

    this.todoService.getAllTodos()
      .then(data => {
        this.todos = data;
        this.pendingTodos = data.filter((todo => !todo.completedDate));
        this.completedTodos = data.filter((todo => todo.completedDate));
      })
  }

  todos: Todo[] = [];
  pendingTodos: Todo[] = [];
  completedTodos: Todo[] = [];

  pendingTodosHeading = "To do"
  completedTodosHeading = "Completed"

  async handleTodoChanged(todo: Todo) {

    if (todo.completedDate) {
      this.todos.forEach(x => { if (x.id === todo.id) x.completedDate = null });
    } else {
      this.todos.forEach(x => { if (x.id === todo.id) x.completedDate = new Date(Date.now()) });
    }

    await this.todoService.toggleTodo(todo)
      .then(x => todo.completedDate = x)
      .catch(err => todo.completedDate = null)

    this.pendingTodos = this.todos.filter((todo => !todo.completedDate));
    this.completedTodos = this.todos.filter((todo => todo.completedDate));
  }

  handleTodoDeleted(todoId: number) {

    this.todoService.deleteTodo(todoId).then(x => {
      this.todos = this.todos.filter(todoItem => todoItem.id !== todoId);

      this.pendingTodos = this.todos.filter((todo => !todo.completedDate));
      this.completedTodos = this.todos.filter((todo => todo.completedDate));
    });
  }
}
