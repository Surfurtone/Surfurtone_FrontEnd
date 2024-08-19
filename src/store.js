//store.js

import { configureStore } from '@reduxjs/toolkit'
import userCountSlice from './store/userCountSlice'

export default configureStore({
  reducer: {
    userCountSlice,
  },
})
