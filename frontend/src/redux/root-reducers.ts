import { combineReducers } from '@reduxjs/toolkit';
import generalSlice from './slicers/general.slice';
import userSlice from './slicers/user.slice ';

const rootState = {
    general: generalSlice,
    user: userSlice,
};
const rootReducer = combineReducers(rootState);

export type RootState = ReturnType<typeof rootReducer>;
export type RawRootState = typeof rootState;
export default rootReducer;
