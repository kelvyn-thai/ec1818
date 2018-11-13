/**
 * Actions
 */

export const ADD_TODO = "ADD_TODO";
export const ADD_TODO_COMPLETED = "ADD_TODO_COMPLETED";
export const ADD_TODO_FAIL = "ADD_TODO_FAIL";
export const ADD_TODO_REQUEST = "ADD_TODO_REQUEST";

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
export const FETCHING_DATA =  "FETCHING_DATA";
export const FETCHED_DATA = 'FETCHED_DATA';
export const FETCH_FAIL = 'FETCH FAIL';


/**
 * API
 */

export const API_GET_LIST_TODOS  = "api/todo/find";
export const API_ADD_TODO = "/api/todo/add";
export const API_REMOVE_TODO = "/api/todo/remove";