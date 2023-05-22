import {  createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const FetchMenu = createAsyncThunk('AddRestsSlice/FetchMenu',async () => {
  let res = await axios.get('menu');
  let data = res.data;
  // console.log(data);
  return data;
})

export const AddNewRest = createAsyncThunk('AddRestsSlice/AddNewRest',async ( data ) => {
  let result
  await axios.post('rest',data)
    .then(res => result = res.data)
  .catch(err => console.log(err.response.data))
  // let result = res.data;
  // console.log(result);
  return result;
})



export const AddRestsSlice = createSlice({
  name: 'Rest',
  initialState:[],
  reducers: {


  },
  extraReducers: (builder) => {
    builder.addCase(FetchMenu.fulfilled,(state,action) => {
      return action.payload
    })
  }
});

// export const {  } = AddRestsSlice.actions;



export default AddRestsSlice.reducer;
