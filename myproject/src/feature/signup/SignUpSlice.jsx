import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: "",
  name:"",
  password : "",
  password2:"",
  tc:"off",  
}

export const SignUpSlice = createSlice({
  name: 'signupslicer',
  initialState,
  reducers: {
    changeEmail: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.email = action.payload 
    },
    changeName: (state,action) => {
      state.name = action.payload
    },
    changePassword: (state, action) => {
      state.password = action.payload
    },
    changePassword2: (state, action) => {
      state.password2 = action.payload
    },
    changeCheckbox: (state, action) => {
      state.tc = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeEmail, changeName, changePassword,changePassword2,changeCheckbox } = SignUpSlice.actions

export default SignUpSlice.reducer