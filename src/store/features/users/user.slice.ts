import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthState } from './types'

const initialState: AuthState = {}

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    updateAuthState: (state, action: PayloadAction<AuthState | undefined>) => {
      state = {...action.payload}
    }
  }
})

export const { updateAuthState } = userSlice.actions
export default userSlice.reducer