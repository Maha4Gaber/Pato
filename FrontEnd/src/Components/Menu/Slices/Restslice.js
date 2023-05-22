import {  createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRest = createAsyncThunk('RestSlice/fetchRest',async (id) => {
  console.log(id);
  let res = await axios.get('menu/'+ 1);
  let data = res.data.data;
  return data;
})



export const RestSlice = createSlice({
  name: 'Rest',
  initialState:[],
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchRest.fulfilled,(state,action) => {
      return action.payload
    })
  }
});

// export const {  } = RestSlice.actions;



export default RestSlice.reducer;
