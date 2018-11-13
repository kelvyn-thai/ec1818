import { 
    ADD_TODO, ADD_TODO_COMPLETED, ADD_TODO_FAIL, ADD_TODO_REQUEST
 } from "../constant";

export const addTodo = () => ({type: ADD_TODO});
export const addTodoCompleted = () => ({type: ADD_TODO_COMPLETED});
export const addTodoFail = () => ({type: ADD_TODO_FAIL});
export const addTodoRequrest  = () => ({type: ADD_TODO_REQUEST});