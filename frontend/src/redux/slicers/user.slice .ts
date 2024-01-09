import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: User = {
    id: undefined,
    fullname: '',
    email: '',
    bio: '',
    image: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            const newUser = { ...state, ...action.payload };
            return newUser;
        },
        logout: () => {
            return { ...initialState };
        },
    },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
