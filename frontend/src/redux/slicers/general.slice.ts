import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TypeOptions } from 'react-toastify';

export type GeneralState = {
    isLoginOpen: boolean;
    isEditProfileOpen: boolean;
    selectedPosts: null;
    ids: null;
    isBackUrl: string;
    posts: null;
    suggested: null;
    isLoading?: boolean;
    message?: { type?: TypeOptions; text: string };
};

// define type payload for action
type SetIsLoadingPayload = boolean;
type SetIsLoginOpenPayload = boolean;
type SetMessagePayload = { type?: TypeOptions; text: string };

const generalSlice = createSlice({
    name: 'general',
    initialState: {
        isLoginOpen: false,
        isEditProfileOpen: false,
        selectedPosts: null,
        ids: null,
        isBackUrl: '/',
        posts: null,
        suggested: null,
        isLoading: true,
    } as GeneralState,
    reducers: {
        setIsLoading: (state, action: PayloadAction<SetIsLoadingPayload>) => {
            state.isLoading = action.payload;
        },
        setIsLoginOpen: (state, action: PayloadAction<SetIsLoginOpenPayload>) => {
            state.isLoginOpen = action.payload;
        },
        setIsEditProfileOpen: (state) => {
            state.isEditProfileOpen = !state.isEditProfileOpen;
        },
        setMessage: (state, action: PayloadAction<SetMessagePayload>) => {
            state.message = action.payload;
        },
    },
});

export const { setIsLoginOpen, setIsEditProfileOpen, setIsLoading, setMessage } =
    generalSlice.actions;
export default generalSlice.reducer;
