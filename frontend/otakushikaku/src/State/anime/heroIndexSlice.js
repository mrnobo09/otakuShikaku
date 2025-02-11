import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    animeIndex : 0,
}

const heroIndexSlice = createSlice({
    name : "heroIndex",
    initialState,
    reducers:{
        changeIndex: (state,action)=>{
            state.animeIndex = action.payload
        },
    },
})

export const {changeIndex} = heroIndexSlice.actions;
export default heroIndexSlice.reducer;