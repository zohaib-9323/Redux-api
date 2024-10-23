import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query';
import { postApi } from '../services/post';
export const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
})
setupListeners(store.dispatch)


// import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
// import { setupListeners } from '@reduxjs/toolkit/query';
// import { postApi } from '../services/post';

// export const store = configureStore({
//   reducer: {
//     [postApi.reducerPath]: postApi.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(postApi.middleware),
// });

// // Setting up listeners
// setupListeners(store.dispatch);

// // Define the RootState and AppDispatch types
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;
