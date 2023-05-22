import { createAsyncThunk,createSlice } from '@reduxjs/toolkit';


export const SaveRestId = createSlice({
  name: 'Rest',
  initialState: {
  id:""
  },
  reducers: {
    saveid(state,action) {
      state.id=action.payload
    }
  },
  extraReducers: (builder) => {
    // builder.addCase(fetchRests.fulfilled,(state,action) => {
    //   return action.payload
    // })
  }
});

export const {  saveid} = SaveRestId.actions;



export default SaveRestId.reducer;

