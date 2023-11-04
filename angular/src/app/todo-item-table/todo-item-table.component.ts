import { Input, Component, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo'
import { TodoItemComponent } from '../todo-item/todo-item.component'

@Component({
  selector: 'app-todo-item-table',
  templateUrl: './todo-item-table.component.html',
  styleUrls: ['./todo-item-table.component.css']
})
export class TodoItemTableComponent {

  @Input() todos?: Todo[];
  @Input() heading!: string
  @Output() onTodoChanged = new EventEmitter<Todo>();
  @Output() onTodoDeleted = new EventEmitter<number>();

  handleTodoChanged(todo: Todo) {
    this.onTodoChanged.emit(todo);
  }

  handleTodoDeleted(todoId: number) {
    this.onTodoDeleted.emit(todoId);
  }
}
