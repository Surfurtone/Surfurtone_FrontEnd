import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  compatibilityCount: 7,
  chatCount: 3,
  roomCreateCount: 3,
}

const userCountSlice = createSlice({
  name: 'userCountSlice',
  initialState,
  reducers: {
    setCompatibilityCount: (state, action) => {
      state.compatibilityCount = state.compatibilityCount + 1
    },
    setChatCount: (state, action) => {
      state.chatCount = state.chatCount + 1
    },
  },
})

export const { setCompatibilityCount, setChatCount } = userCountSlice.actions
export default userCountSlice.reducer
