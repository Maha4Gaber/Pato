import {  createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchdinnerRests = createAsyncThunk('DinnerSlice/fetchdinnerRests',async () => {
  let res = await axios.get('menu/4');
  let data = res.data.data;
  // let menu_rests=data.filter(item => item.menu_id === 6)
  return data;
})



export const DinnerSlice = createSlice({
  name: 'Rest',
  initialState:[],
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchdinnerRests.fulfilled,(state,action) => {
      return action.payload
    })
  }
});

// export const {  } = DinnerSlice.actions;



export default DinnerSlice.reducer;
