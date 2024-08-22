import {createSlice} from '@reduxjs/toolkit';

const bookSlice = createSlice({
    name:'book',
    initialState:[],
    reducers:{
        addBook:(state,action) =>{
            state.push(action.payload);
        }
    }
})

export const {addBook} = bookSlice.actions;
export default bookSlice.reducer;