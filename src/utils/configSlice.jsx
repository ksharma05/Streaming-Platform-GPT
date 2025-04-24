import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name:"config",
    initialState:{
        prefLang:"english",
    },
    reducers:{
        changeLangPref: (state, action)=>{
            state.prefLang = action.payload;
        }
    }
});

export const {changeLangPref} = configSlice.actions;
export default configSlice.reducer;