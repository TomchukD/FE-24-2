import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from 'src/app/store/state';

export const selectUserState = createFeatureSelector<UserState>('user')

export const selectUsers = createSelector(
    selectUserState,
    state => state.users,
)
export const selectUsersLoad = createSelector(
    selectUserState,
    state => state.loading,
)
