import {  createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSingleBlog = createAsyncThunk('SingleBlogSlice/fetchSingleBlog',async (blog_id) => {
  blog_id=blog_id || localStorage.getItem('blog_id')
  let res = await axios.get('blog/' + blog_id);
  let data = res.data.data;
  return data.blog;
})


export const postComment = createAsyncThunk('SingleBlogSlice/postComment',async ({comment,name,email}) => {
  let blog_id = localStorage.getItem('blog_id');
  let data = {
    comment: comment,
    name: name,
    email: email,
    blog_id:blog_id
  }
    await axios.post('comments',data)
    .then(result => console.log(result))
    .catch(err => console.log(err))
  return data;
})



export const SingleBlogSlice = createSlice({
  name: 'Rest',
  initialState:[],
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSingleBlog.fulfilled,(state,action) => {
      return action.payload
    })
  },
  
});

export const {addComment, } = SingleBlogSlice.actions;



export default SingleBlogSlice.reducer;
