import { configureStore } from "@reduxjs/toolkit"
import bookSlice from "../utils/bookSlice"
const store = configureStore({
    reducer:{
        book:bookSlice,
    }
})

export default store;