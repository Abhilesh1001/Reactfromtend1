import { configureStore } from '@reduxjs/toolkit'
import SignUpSlice from '../feature/signup/SignUpSlice'
import LoginSlice from '../feature/login/LoginSlice'
import CartSlicer from '../feature/cart/CartSlicer'
import {rootApi} from '../services/rootApi'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    sign : SignUpSlice,
    login : LoginSlice,
    len : CartSlicer,
    [rootApi.reducerPath] : rootApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rootApi.middleware),
})

setupListeners(store.dispatch)