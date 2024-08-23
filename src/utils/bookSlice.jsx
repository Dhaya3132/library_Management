import {createSlice} from '@reduxjs/toolkit';
import {bookData} from './mockData'

const bookSlice = createSlice({
    name:'book',
    initialState:bookData,
    reducers:{
        addBook:(state,action) =>{
            state.push(action.payload);
        }
    }
})

export const {addBook} = bookSlice.actions;
export default bookSlice.reducer;