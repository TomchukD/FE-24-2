import { Component } from '@angular/core';
import { TodoListComponent } from 'src/app/todo/todo-list/todo-list.component';
import { TodoAddTodoComponent } from 'src/app/todo/add-todo/todo-add-todo.component';
import { TodoInterface } from 'src/app/todo/interface/todo.interface';

@Component({
  selector: 'fe-todo',
  template: `
    <div class="f-column">
      <fe-add-todo />
      <fe-todo-list  />
    </div>
  `,
  styles: `
    .f-column {
      display: flex;
      flex-direction: column;
    }
  `,
  imports: [TodoListComponent, TodoAddTodoComponent],
  standalone: true
})
export class TodoComponent {

}
