import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export type User = {
  id?: number;
  fullname: string;
  email?: string;
  bio?: string;
  image?: string;
};

export type UserActions = {
  setUser: (user: User) => void;
  logout: () => void;
};

export const userStore = create<User & UserActions>()(
  devtools(
    persist(
      (set) => ({
        id: undefined,
        fullname: '',
        email: '',
        bio: '',
        image: '',
        setUser: (user) => set(user),
        logout: () => {
          set({ id: undefined, fullname: '', email: '', bio: '', image: '' });
        },
      }),
      {
        name: 'user-storage',
      }
    )
  )
);
