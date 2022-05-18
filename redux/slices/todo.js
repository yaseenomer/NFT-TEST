

import { createSlice } from "@reduxjs/toolkit"




export const todo = createSlice({
    name: "todo",
    initialState:{
        todos: [],
        todo: null,
        loading: false
    },

    reducers : {
        getTodos(state,  action ) {
            state.todos =  action.payload
        },

        addTodo(state, action) {
            state.todos  = [...state.todos, action.payload]
        },

        getTodo(state, action) {
            state.todo  = state.todos.find(todo => todo.id === action.payload.id)
        },

        updateTodo(state, action) {
            state.todos = state.todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return action.payload
                }
                return todo
            })
        },


        deleteTodo(state, action) {
            state.todos = state.todos.filter(item => item.id !== action.payload.id)
        },

        markAsDone(state, action) {
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload.id ){
                    todo.done = true
                    return todo
                }
                return todo
            })
        }
    }
})

export const { getTodos, addTodo, deleteTodo, markAsDone, getTodo, updateTodo  } = todo.actions


export default todo.reducer 

