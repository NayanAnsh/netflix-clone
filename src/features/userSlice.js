import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';



// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.


export const userSlice = createSlice({
  name: 'user',
  initialState :{
   user:null
  }
  ,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
   login: (state,action)=>{
    state.user = action.payload;
   },
   logout : (state)=>{
    state.user = null;
   }
  }})

export const {login , logout} = userSlice.actions;
export const selectUser = state=> state.user.user;
export default userSlice.reducer;
