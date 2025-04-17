import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import * as UserAction from 'src/app/store/actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { User } from 'src/app/store/user.interface';


@Injectable()
export class UserEffect {
    private actions$ = inject(Actions);
    private http = inject(HttpClient);

    loadUsers$ =  createEffect(() => this.actions$.pipe(
        ofType(UserAction.loadUser),
        mergeMap(()=>(
            this.http.get<User[]>('https://jsonplaceholder.typicode.com/users').pipe(
                map((users: User[]) => UserAction.loadUserSuccess({ users })),
                catchError(error => of(UserAction.loadUserError(error)))
            )
        ))
    ));
}
