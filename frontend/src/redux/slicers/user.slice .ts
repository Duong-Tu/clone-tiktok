import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: User = {
    id: undefined,
    fullname: '',
    email: '',
    bio: '',
    image: '',
};

// Save user data to localStorage
const saveUserToLocalStorage = (user: User) => {
    localStorage.setItem('user', JSON.stringify(user));
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            const newUser = { ...state, ...action.payload };
            saveUserToLocalStorage(newUser);
            return newUser;
        },
        logout: () => {
            localStorage.removeItem('user');
            return { ...initialState };
        },
    },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
