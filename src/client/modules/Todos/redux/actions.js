import { 
    FETCH_TODOS, FETCH_TODOS_FAIL, FETCH_TODOS_COMPLETED, 
    FETCH_TODOS_REQUEST } from "../constant";



export const fetchTodos = () => ({type: FETCH_TODOS});
export const fetchTodosCompleted = (payload) => ({type: FETCH_TODOS_COMPLETED, payload: payload});
export const fetchTodosFail = () => ({type: FETCH_TODOS_FAIL});
export const requestFetchTodos = (payload) => ({type: FETCH_TODOS_REQUEST, payload: payload});
