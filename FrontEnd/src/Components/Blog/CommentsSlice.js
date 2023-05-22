import {  createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBlogComments = createAsyncThunk('BlogCommentsSlice/fetchBlogComments',async (blog_id) => {
  let res = await axios.get('blog/' + blog_id);
  let data = res.data.data;
  return data.comments;
})






export const BlogCommentsSlice = createSlice({
  name: 'Rest',
  initialState:[],
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBlogComments.fulfilled,(state,action) => {
      return action.payload
    })
  },
  
});

export const {addComment, } = BlogCommentsSlice.actions;



export default BlogCommentsSlice.reducer;
