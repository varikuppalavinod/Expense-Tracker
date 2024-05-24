import {createSlice} from "@reduxjs/toolkit"

const initialAuthstate={
    isAuthenticated:false
}
const authSlice=createSlice({
  name:"authentication",
  initialState:initialAuthstate,
  reducers:{
      login(state){
          state.isAuthenticated=true;
      },
      logout(state){
          state.isAuthenticated=false;
      },
  }

})
export const authActions=authSlice.actions;
export default authSlice.reducer;
