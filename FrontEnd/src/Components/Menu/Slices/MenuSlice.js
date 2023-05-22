import {  createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchmenu = createAsyncThunk('MenuSlice/fetchmenu',async () => {
  let res = await axios.get('menu/');
  let data = res.data.data;
  return data;
})



export const MenuSlice = createSlice({
  name: 'Menu',
  initialState: [],
  reducers: {

  },
  extraReducers:
    (builder) => {
      builder.addCase(fetchmenu.fulfilled,(state,action) => {    
      return action.payload
    })
  }
});

// export const {  } = MenuSlice.actions;



export default MenuSlice.reducer;
