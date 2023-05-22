import {  createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRests = createAsyncThunk('GetRestsSlice/fetchRests',async () => {
  let res = await axios.get('rest');
  let data = res.data.data;
  // console.log(data);
  return data;
})



export const GetRestsSlice = createSlice({
  name: 'Rest',
  initialState:[],
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchRests.fulfilled,(state,action) => {
      return action.payload
    })
  }
});

// export const {  } = GetRestsSlice.actions;



export default GetRestsSlice.reducer;
