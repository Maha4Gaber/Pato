import {  createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const AddNewBlog = createAsyncThunk('AddRestsSlice/AddNewBlog',async ( data ) => {
  let result
  await axios.post('blog',data)
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
    builder.addCase(AddNewBlog.fulfilled,(state,action) => {
      return action.payload
    })
  }
});

// export const {  } = AddRestsSlice.actions;



export default AddRestsSlice.reducer;
