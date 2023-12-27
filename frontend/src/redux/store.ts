import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer, { RootState } from './root-reducers';

const inintStore = () => {
    const store = configureStore({
        reducer: rootReducer,
        devTools: true,
    });
    return store;
};

export const reduxStore = inintStore();
export type AppStore = ReturnType<typeof inintStore>;

export type AppThunk<T = any> = ThunkAction<Promise<T>, RootState, unknown, Action<string>>;

export const wrapper = createWrapper<AppStore>(inintStore);
