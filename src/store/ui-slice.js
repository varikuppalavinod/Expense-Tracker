import{createSlice} from "@reduxjs/toolkit"

 const uiSlice=createSlice({
    name:"ui",
    initialState:{cartisvisible:false},
    reducers:{

        toggle(state){
            state.cartisvisible=!state.cartisvisible
        }
    }
 })
 export const uiSliceActions=uiSlice.actions;
 export default uiSlice;