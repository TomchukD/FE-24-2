import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUsers, selectUsersLoad } from 'src/app/store/selector';
import { AsyncPipe } from '@angular/common';
import * as UserAction from 'src/app/store/actions';
import { User } from 'src/app/store/user.interface';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from 'src/app/component/home/home.component';

@Component({
    selector: 'app-root',
    imports: [
        AsyncPipe,
        RouterOutlet,
        RouterLink,
        HomeComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    private store = inject(Store)

    users$ = this.store.select(selectUsers)
    loading$ = this.store.select(selectUsersLoad)

    public load(): void {
        this.store.dispatch(UserAction.loadUser())
    }
}
