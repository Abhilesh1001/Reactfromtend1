import { configureStore } from '@reduxjs/toolkit'
import SignUpSlice from '../feature/signup/SignUpSlice'
import LoginSlice from '../feature/login/LoginSlice'

export const store = configureStore({
  reducer: {
    sign : SignUpSlice,
    login : LoginSlice
  },
})