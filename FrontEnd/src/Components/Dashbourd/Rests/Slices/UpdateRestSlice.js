import {  createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRest = createAsyncThunk('Updaterest/fetchRest',async (id) => {
  let res = await axios.get('rest/' + id);
  let data = res.data.data;
  // console.log(data);
  return data;
})
export const updaterestfun = createAsyncThunk('Updaterest/updaterest',async (data) => {
  console.log(data.data);
  let res = await axios.put('rest/' + data.Rest_id,data.data)
    .then()
    .catch(err => console.log(err.response.data))
    ;
  let result = res.data;
  console.log(result);
  return result;
})



export const Updaterest = createSlice({
  name: 'Rest',
  initialState: [],
  reducers: {
    update(state,action) {
      console.log(action.payload);
    }

  },
  extraReducers: (builder) => {
    builder.addCase(fetchRest.fulfilled,(state,action) => {
      return action.payload
    })
  }
});

export const {  update} = Updaterest.actions;



export default Updaterest.reducer;

