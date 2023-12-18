import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

export type GeneralState = {
    isLoginOpen: boolean;
    isEditProfileOpen: boolean;
    selectedPosts: null;
    ids: null;
    isBackUrl: '/';
    posts: null;
    suggested: null;
};
export type GeneralActions = {
    setIsLoginOpen: (isLoginOpen: boolean) => void;
    setIsEditProfileOpen: () => void;
};

const useGeneralStore = create<GeneralState & GeneralActions>()(
    devtools(
        persist(
            (set) => ({
                isLoginOpen: false,
                isEditProfileOpen: false,
                selectedPosts: null,
                ids: null,
                isBackUrl: '/',
                posts: null,
                suggested: null,
                setIsLoginOpen: (isLoginOpen: boolean) => {
                    set({ isLoginOpen });
                },
                setIsEditProfileOpen: () => {
                    return set((state) => ({
                        isEditProfileOpen: !state.isEditProfileOpen,
                    }));
                },
            }),
            {
                name: 'general-storage',
            },
        ),
    ),
);

export default useGeneralStore;
