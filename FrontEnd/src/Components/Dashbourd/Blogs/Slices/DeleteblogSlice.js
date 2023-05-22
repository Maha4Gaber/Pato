import {  createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const deleteblogfun = createAsyncThunk('Deleteblog/deleteblogfun',async (id) => {
  let res = await axios.delete('blog/' + id)
    .then()
    .catch(err => console.log(err.response.data))
    ;
  let result = res.data;
  console.log(result);
  return result;
})



export const Deleteblog = createSlice({
  name: 'Rest',
  initialState: [],
  reducers: {
    update(state,action) {
      console.log(action.payload);
    }

  },
  extraReducers: (builder) => {
    builder.addCase(deleteblogfun.fulfilled,(state,action) => {
      return action.payload
    })
  }
});

export const {  update} = Deleteblog.actions;



export default Deleteblog.reducer;

