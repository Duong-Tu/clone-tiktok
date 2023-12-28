import { createSlice } from '@reduxjs/toolkit';

export type GeneralState = {
    isLoginOpen: boolean;
    isRegisterOpen: boolean;
    isEditProfileOpen: boolean;
    selectedPosts: null;
    ids: null;
    isBackUrl: string;
    posts: null;
    suggested: null;
    isLoading: boolean;
};

const generalSlice = createSlice({
    name: 'general',
    initialState: {
        isLoginOpen: false,
        isRegisterOpen: false,
        isEditProfileOpen: false,
        selectedPosts: null,
        ids: null,
        isBackUrl: '/',
        posts: null,
        suggested: null,
        isLoading: true,
    },
    reducers: {
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setIsLoginOpen: (state, action) => {
            state.isLoginOpen = action.payload;
        },
        setIsRegisterOpen: (state, action) => {
            state.isRegisterOpen = action.payload;
        },
        setIsEditProfileOpen: (state) => {
            state.isEditProfileOpen = !state.isEditProfileOpen;
        },
    },
});

export const { setIsLoginOpen, setIsRegisterOpen, setIsEditProfileOpen, setIsLoading } =
    generalSlice.actions;
export default generalSlice.reducer;
