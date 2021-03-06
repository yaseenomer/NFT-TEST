
import { configureStore } from "@reduxjs/toolkit"
import { createWrapper  } from "next-redux-wrapper"
import todo from "./slices/todo"


const makeStore = () => configureStore({
    reducer : {
         todo
    },
    devTools: true
})
   


export const store = createWrapper(makeStore)







