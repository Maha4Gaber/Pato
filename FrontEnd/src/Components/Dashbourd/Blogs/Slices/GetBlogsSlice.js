import {  createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBlogs = createAsyncThunk('GetBlogsSlice/fetchBlogs',async () => {
  let res = await axios.get('blog');
  let data = res.data.data;
  // console.log(data);
  return data;
})



export const GetBlogsSlice = createSlice({
  name: 'Rest',
  initialState:[],
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchBlogs.fulfilled,(state,action) => {
      return action.payload
    })
  }
});

// export const {  } = GetBlogsSlice.actions;



export default GetBlogsSlice.reducer;
