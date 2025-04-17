import { User } from 'src/app/store/user.interface';

export interface UserState {
    users: User[];
    loading: boolean;
    error: string | null;
}

export const initialState: UserState = {
    users: [],
    error: null,
    loading: false,
}
