import { createAsyncThunk,createSlice } from '@reduxjs/toolkit';


export const SaveBlogId = createSlice({
  name: 'blog',
  initialState: {
  id:""
  },
  reducers: {
    saveBlog_id(state,action) {
      state.id=action.payload
    }
  },
  extraReducers: (builder) => {
    // builder.addCase(fetchRests.fulfilled,(state,action) => {
    //   return action.payload
    // })
  }
});

export const {  saveBlog_id} = SaveBlogId.actions;



export default SaveBlogId.reducer;

