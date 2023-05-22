import {  createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchLunchRests = createAsyncThunk('LunchSlice/fetchLunchRests',async () => {
  let res = await axios.get('menu/5');
  let data = res.data.data;
  // let menu_rests=data.filter(item => item.menu_id === 5)
  return data;
})



export const LunchSlice = createSlice({
  name: 'Rest',
  initialState:[],
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchLunchRests.fulfilled,(state,action) => {
      return action.payload
    })
  }
});

// export const {  } = LunchSlice.actions;



export default LunchSlice.reducer;
