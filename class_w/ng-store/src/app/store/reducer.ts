import { createReducer, on } from '@ngrx/store';
import { initialState } from 'src/app/store/state';
import * as UserAction from 'src/app/store/actions';

export  const userReducer = createReducer(
    initialState,
    on(UserAction.loadUser, state => ({...state, loading: true}) ),
    on(UserAction.loadUserSuccess, (state, {users}) => {
        return {
            ...state,
            users,
            loading: false,
            error: null,
        };
    } ),
    on(UserAction.loadUserError, (state, {error}) => ({
        ...state,
        loading: false,
        error,
    }) )
)
