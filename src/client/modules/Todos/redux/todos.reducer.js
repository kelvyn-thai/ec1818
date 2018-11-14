import {
    FETCH_TODOS, FETCH_TODOS_COMPLETED, FETCH_TODOS_FAIL,
    FETCHING_DATA, FETCHED_DATA, FETCH_FAIL,
} from "../constant";
import {
    ADD_TODO, ADD_TODO_COMPLETED, ADD_TODO_FAIL
} from "../features/AddTodo/constant";
import {
    REMOVE_TODO, REMOVE_TODO_COMPLETED, REMOVE_TODO_FAIL,
    CHANGE_STATUS_TODO, CHANGE_STATUS_TODO_COMPLETED, CHANGE_STATUS_TODO_FAIL
} from "../features/ListTodos/constant";
import { findByFieldAndUpdate } from "../helper/findByFieldAndUpdate";
import findByFieldAndRemove from "../helper/findByFieldAndRemove";

const initialState = {
    data: {},
    isError: false,
    msg: '',
    isFetching: false,
    isFetched: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TODOS:
            return {
                ...initialState,
                isFetching: true,
                msg: FETCHING_DATA
            }
        case FETCH_TODOS_COMPLETED:
            return {
                ...state,
                isFetching: false,
                isFetched: true,
                data: {
                    ...action.payload
                },
                msg: FETCHED_DATA
            }
        case FETCH_TODOS_FAIL:
            return {
                ...state,
                isFetching: false,
                isFetched: false,
                msg: FETCH_FAIL
            }
        case ADD_TODO:
            return {
                ...state
            }
        case ADD_TODO_COMPLETED:
        {
            const newTodo = action.payload;
            return {
                ...state,
                data: {
                    ...state.data,
                    payload: [...state.data.payload, newTodo]
                }
            }
        }
        case ADD_TODO_FAIL:
            return {
                ...state,
                isError: true,
            }
        case REMOVE_TODO:
            return {
                ...state
            }
        case REMOVE_TODO_COMPLETED:
        {
            const todo ={...action.payload};
            const todos =state.data.payload.slice();

            return {
                ...state,
                data: {
                    ...state.data,
                    payload: [...findByFieldAndRemove(todos, todo, '_id')]
                }
            }
        }
           
        case REMOVE_TODO_FAIL:
            return {
                ...state,
                isError: true
            }
        case CHANGE_STATUS_TODO:
            return {
                ...state
            }
        case CHANGE_STATUS_TODO_COMPLETED:
        {
            const todo = {...action.payload};
            const todos = state.data.payload.slice();
            return {
                ...state,
                data: {
                    ...state.data,
                    payload: [...findByFieldAndUpdate(todos, todo, '_id')]
                }
            }   
        }
        case CHANGE_STATUS_TODO_FAIL:
            return {
                ...state,
                isError: true
            }
        default:
            return state
    }
}
