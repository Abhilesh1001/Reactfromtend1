import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  len: 0,
  productID : 1,
  name : '',
  price : '',
  cart : {},
  totalSum : 0,
  query:''
}

export const cartSlice = createSlice({
  name: 'lenSlicer',
  initialState,
  reducers: {
    changeLen: (state,action) => {
      state.len = action.payload 
    },
    changeProductID : (state,action)=>{
        state.productID = action.payload
    },
    changeName : (state,action)=>{
        state.name = action.payload
    },
    changePrice : (state,action)=>{
      state.price = action.payload
    },
    changeCart : (state,action)=>{
      state.cart=action.payload
    },
    changeTotalSum : (state,action)=>{
      state.totalSum=action.payload
    },
    changeQuery : (state,action)=>{
      state.query=action.payload
    }
  },
})
// Action creators are generated for each case reducer function
export const { changeLen,changeProductID,changeName,changePrice,changeCart,changeTotalSum,changeQuery } = cartSlice.actions

export default cartSlice.reducer