import {
    REMOVE_TODO, REMOVE_TODO_COMPLETED, REMOVE_TODO_FAIL, REQUEST_REMOVE_TODO,
    CHANGE_STATUS_TODO, CHANGE_STATUS_TODO_COMPLETED, CHANGE_STATUS_TODO_FAIL, REQUEST_CHANGE_STATUS_TODO

} from "../constant";

export const remove = () => ({ type: REMOVE_TODO });
export const removeTodoCompleted = (payload) => ({ type: REMOVE_TODO_COMPLETED, payload: payload });
export const removeTodoFail = () => ({ type: REMOVE_TODO_FAIL });
export const requestRemoveTodo = (payload) => ({ type: REQUEST_REMOVE_TODO, payload: payload });


export const changeStatus = () => ({ type: CHANGE_STATUS_TODO });
export const changeStatusTodoCompleted = (payload) => ({ type: CHANGE_STATUS_TODO_COMPLETED, payload: payload });
export const changeStatusTodoFail = () => ({ type: CHANGE_STATUS_TODO_FAIL });
export const requestChangeStatusTodo = (payload) => ({ type: REQUEST_CHANGE_STATUS_TODO, payload: payload });
