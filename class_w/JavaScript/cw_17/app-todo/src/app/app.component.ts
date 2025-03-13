import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from 'src/app/todo-list/todo-list.component';

@Component({
    selector: 'td-root1',
    imports: [
        TodoListComponent
    ],
    template: `
        <app-todo-list></app-todo-list>
        <button [disabled]="isShow" (click)="onToggle()">{{ title }}</button>
        {{ isShow }}
    `,
    styles: `
        button {
            color: red;
        }
    `
})
export class AppComponent {
    public title = 'app-todo';

    private show = false;

    public onToggle(): void {
        this.show = !this.show;
        setTimeout(()=>{
            this.show = !this.show;
        },3000)
    }

    public get isShow(): boolean {
      return this.show;
    }
}
