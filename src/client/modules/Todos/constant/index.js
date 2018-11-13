/**
 * Actions
 */


export const REMOVE_TODO = "REMOVE_TODO";
export const REMOVE_TODO_COMPLETED = "REMOVE_TODO_COMPLETED";
export const REMOVE_TODO_FAIL = "REMOVE_TODO_FAIL";
export const REMOVE_TODO_REQUEST = "REMOVE_TODO_REQUEST";

export const FETCH_TODOS = "FETCH_TODOS";
export const FETCH_TODOS_FAIL = "FETCH_TODOS_FAIL";
export const FETCH_TODOS_COMPLETED = "FETCH_TODOS_COMPLETED";
export const FETCH_TODOS_REQUEST = "FETCH_TODOS_REQUEST";


/**
 * MSG ACTIONS
 */
export const FETCHING_DATA = "FETCHING_DATA";
export const FETCHED_DATA = 'FETCHED_DATA';
export const FETCH_FAIL = 'FETCH FAIL';


/**
 * API
 */

export const API_GET_LIST_TODOS = "/api/todos/find";
export const API_REMOVE_TODO = "/api/todos/remove-todo";