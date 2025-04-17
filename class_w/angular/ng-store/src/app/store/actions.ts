import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/store/user.interface';

export const loadUser = createAction('[User] load user')
export const loadUserSuccess=  createAction('[User] load user success', props<{users: User[]}>())
export const loadUserError =  createAction('[User] load user error' , props<{error: string}>())
