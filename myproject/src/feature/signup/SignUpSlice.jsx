import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: "",
  name:"",
  password : "",
  password2:"",
  tc:"off", 
  phone:0,
  desc:'',
}

export const SignUpSlice = createSlice({
  name: 'signupslicer',
  initialState,
  reducers: {
    changeEmail: (state,action) => {
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
    changePhone: (state, action) => {
      state.phone = action.payload
    },
    changeDescription: (state, action) => {
      state.desc = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeEmail, changeName, changePassword,changePassword2,changeCheckbox,changePhone,changeDescription } = SignUpSlice.actions

export default SignUpSlice.reducer