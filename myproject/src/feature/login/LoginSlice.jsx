import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: "",
  password : "",
  password2:"",
  tc:"off", 
  user : '',
}

export const LoginSlice = createSlice({
  name: 'loginslicer',
  initialState,
  reducers: {
    changeEmail: (state,action) => {
      state.email = action.payload 
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
    changeUser: (state, action) => {
      state.user = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeEmail,changePassword,changePassword2,changeCheckbox,changeUser } = LoginSlice.actions

export default LoginSlice.reducer