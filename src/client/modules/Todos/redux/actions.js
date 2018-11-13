import { 
    REMOVE_TODO, REMOVE_TODO_COMPLETED, REMOVE_TODO_FAIL, 
    FETCH_TODOS, FETCH_TODOS_FAIL, FETCH_TODOS_COMPLETED, 
    FETCH_TODOS_REQUEST } from "../constant";

export const removeTodo = () => ({type: REMOVE_TODO});
export const removeTodoCompleted = () => ({type: REMOVE_TODO_COMPLETED});
export const removeTodoFail = () => ({type: REMOVE_TODO_FAIL});

export const fetchTodos = () => ({type: FETCH_TODOS});
export const fetchTodosCompleted = (payload) => ({type: FETCH_TODOS_COMPLETED, payload: payload});
export const fetchTodosFail = () => ({type: FETCH_TODOS_FAIL});
export const requestFetchTodos = () => ({type: FETCH_TODOS_REQUEST});
