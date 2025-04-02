import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoInterface } from 'src/app/todo/interface/todo.interface';
import { TodoItemComponent } from 'src/app/todo/todo-item/todo-item.component';
import { TodoService } from 'src/app/todo/todo.service';

@Component({
  selector: 'fe-todo-list',
  imports: [TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {

  items: TodoInterface[] = []

  constructor(private todoService: TodoService) {
    this.items = todoService.getTodos()
  }

  public onDeleteItem(id: number): void {
    this.todoService.deleteTodo(id)
  }
}
