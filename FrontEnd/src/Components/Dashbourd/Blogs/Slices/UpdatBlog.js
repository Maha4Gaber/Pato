import {  createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBlog = createAsyncThunk('UpdateBlog/fetchBlog',async (id) => {
  let res = await axios.get('blog/' + id);
  let data = res.data.data;
  // console.log(data);
  return data.blog;
})
export const updateBlogfun = createAsyncThunk('UpdateBlog/updateBlogfun',async (data) => {
  console.log(data);
  let res = await axios.put('blog/' + data.Blog_id,data.data)
    .then()
    .catch(err => console.log(err.response.data))
    ;
  let result = res.data;
  console.log(result);
  return result;
})



export const UpdateBlog = createSlice({
  name: 'Blog',
  initialState: [],
  reducers: {
    update(state,action) {
      console.log(action.payload);
    }

  },
  extraReducers: (builder) => {
    builder.addCase(fetchBlog.fulfilled,(state,action) => {
      return action.payload
    })
  }
});

export const {  update} = UpdateBlog.actions;



export default UpdateBlog.reducer;

