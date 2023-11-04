import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Output() onTodoChanged = new EventEmitter<Todo>();
  @Output() onTodoDeleted = new EventEmitter<number>();

  constructor(
    private todoService: TodoService,
  ) { }

  onCheckboxChange(todo: Todo): void {
    this.onTodoChanged.emit(todo);
  }

  onDeleteButtonClicked(todoId: number) {
    this.onTodoDeleted.emit(todoId);
  }
}
