import { configureStore } from '@reduxjs/toolkit';
import staffReducer from './staffSlice';


const store = configureStore({
  reducer: {
    staff: staffReducer,
  },
});


export type AppDispatch = typeof store.dispatch;
export default store;
