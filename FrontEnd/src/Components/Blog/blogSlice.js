import {  createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBlog = createAsyncThunk('BlogSlice/fetchBlog',async () => {
  let res = await axios.get('blog');
  let data = res.data.data;
  // let menu_rests=data.filter(item => item.menu_id === 6)
  return data;
})



export const BlogSlice = createSlice({
  name: 'Rest',
  initialState:[],
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchBlog.fulfilled,(state,action) => {
      return action.payload
    })
  }
});

// export const {  } = BlogSlice.actions;



export default BlogSlice.reducer;
