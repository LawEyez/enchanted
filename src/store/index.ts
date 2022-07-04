import { configureStore } from '@reduxjs/toolkit'
import { userApiSlice } from './features/users/user.api'
import authReducer from './features/users/user.slice'

export const store = configureStore({
  reducer: {
    auth: authReducer, 
    [userApiSlice.reducerPath]: userApiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(userApiSlice.middleware)
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>