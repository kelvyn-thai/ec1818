import { createSelector } from "reselect";

export const todosSelector = state => state.todos;
export const usersSelector = state => state.user;
export const createTodoSelector = createSelector(
    todosSelector,
    todos=>todos
)
