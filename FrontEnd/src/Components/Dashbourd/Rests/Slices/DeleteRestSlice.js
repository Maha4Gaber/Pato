import {  createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const deleterestfun = createAsyncThunk('Deleterest/deleterestfun',async (id) => {
  let res = await axios.delete('rest/' + id)
    .then()
    .catch(err => console.log(err.response.data))
    ;
  let result = res.data;
  console.log(result);
  return result;
})



export const Deleterest = createSlice({
  name: 'Rest',
  initialState: [],
  reducers: {
    update(state,action) {
      console.log(action.payload);
    }

  },
  extraReducers: (builder) => {
    builder.addCase(deleterestfun.fulfilled,(state,action) => {
      return action.payload
    })
  }
});

export const {  update} = Deleterest.actions;



export default Deleterest.reducer;

