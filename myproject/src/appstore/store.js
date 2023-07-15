import { configureStore } from '@reduxjs/toolkit'
import SignUpSlice from '../feature/signup/SignUpSlice'

export const store = configureStore({
  reducer: {
    sign : SignUpSlice
  },
})