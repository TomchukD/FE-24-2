import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoInterface } from 'src/app/todo/interface/todo.interface';
import { TodoService } from 'src/app/todo/todo.service';

@Component({
  selector: 'fe-add-todo',
  imports: [FormsModule],
  templateUrl: './todo-add-todo.component.html',
  styleUrl: './todo-add-todo.component.scss'
})
export class TodoAddTodoComponent {
  public value: string | undefined;

  constructor(private todoService: TodoService) {
  }

  public onAdd(): void {
    if(!this.value?.trim()){
      return
    }
   this.todoService.addTodo(this.value)
    this.value = undefined;
  }
}
