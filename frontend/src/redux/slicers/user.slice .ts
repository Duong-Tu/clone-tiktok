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
            const accessToken = newUser.token;
            if (accessToken) {
                localStorage.setItem('access_token', accessToken);
            }
            return newUser;
        },
        logout: () => {
            localStorage.removeItem('access_token');
            return { ...initialState };
        },
    },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
