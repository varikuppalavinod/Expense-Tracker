import {createSlice} from "@reduxjs/toolkit"

const intialauthState={token:"",isloggedin:false}


const authslice=createSlice({
    name:"auth",
    initialState:intialauthState,
    reducers:{
        login(state,action){
            state.token=action.payload;
            state.isloggedin=true;
            console.log(state.token)
        },
        logout(state){
          state.token="";
          state.isloggedin=false;
          console.log("this is token",state.isloggedin,state.token)

        }
    }
})
export const authActions=authslice.actions;
export default authslice.reducer;