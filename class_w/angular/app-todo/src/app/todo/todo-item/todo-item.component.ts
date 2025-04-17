import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoInterface } from 'src/app/todo/interface/todo.interface';

@Component({
  selector: 'fe-todo-item',
  imports: [],
  standalone:true,
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {
  @Input() item!: TodoInterface;
  @Output() onDelete = new EventEmitter();

  public onDeleteItem() {
    this.onDelete.emit(this.item.id);
  }
}
