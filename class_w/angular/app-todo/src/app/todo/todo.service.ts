import { Injectable } from '@angular/core';
import { TodoInterface } from 'src/app/todo/interface/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: TodoInterface[] = [];

  public getTodos(): TodoInterface[] {
    return this.todos;
  }

  public addTodo(title: string): void {
    this.todos.push({
      id: Date.now(),
      title,
      completed: false
    });
  }

  public deleteTodo(id: number): void {
    this.todos = this.todos.filter((i) => i.id !== id);
  }
}
