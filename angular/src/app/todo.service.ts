import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class TodoService {

  items: Todo[] = [];
  url = 'api/todo';

  constructor(
    private http: HttpClient
  ) { }

  async getAllTodos(): Promise<Todo[]> {
    const data = await fetch(this.url, { method: 'GET' })
    return await data.json() ?? [];
  }

  async toggleTodo(todo: Todo): Promise<Date> {

    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todo)
    };

    const completedDate = await fetch(this.url + "/" + todo.id, requestOptions)

    return completedDate.json() ?? null;
  }

  async deleteTodo(todoId: number): Promise<void>  {

    await fetch(this.url + "/" + todoId, { method: 'DELETE' });

    return
  }

  async createTodo(todo: Todo): Promise<void> {

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todo)
    };
    await fetch(this.url, requestOptions);

    return;
  }
}
