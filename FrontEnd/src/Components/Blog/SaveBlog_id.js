import {  createAsyncThunk, createSlice } from '@reduxjs/toolkit';




export const SaveBlogId = createSlice({
  name: 'Rest',
  initialState: {
    id: "",
  },
  reducers: {
    saveBlogid(state,action) {
      state.id = action.payload;
    }
  },
  extraReducers: 
  (builder) => {

  }
});

export const {saveBlogid} = SaveBlogId.actions;



export default SaveBlogId.reducer;

