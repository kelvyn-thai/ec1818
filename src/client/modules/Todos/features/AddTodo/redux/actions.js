import { 
    ADD_TODO, ADD_TODO_COMPLETED, ADD_TODO_FAIL, ADD_TODO_REQUEST
 } from "../constant";

export const addTodo = () => ({type: ADD_TODO});
export const addTodoCompleted = (payload) => ({type: ADD_TODO_COMPLETED, payload: payload});
export const addTodoFail = () => ({type: ADD_TODO_FAIL});
export const addTodoRequrest  = (payload) => ({type: ADD_TODO_REQUEST, payload: payload});