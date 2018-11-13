import { FETCH_TODOS, FETCH_TODOS_COMPLETED, FETCH_TODOS_FAIL, FETCHING_DATA, FETCHED_DATA, FETCH_FAIL, ADD_TODO, ADD_TODO_COMPLETED, ADD_TODO_FAIL, REMOVE_TODO, REMOVE_TODO_COMPLETED, REMOVE_TODO_FAIL } from "../constant";

const initialState = {
    data: {},
    error: false,
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
            return {
                ...state
            }
        case ADD_TODO_FAIL:
            return {
                ...state,
                error: true,
            }
        case REMOVE_TODO:
            return {
                ...state
            }
        case REMOVE_TODO_COMPLETED:
            return {
                ...state
            }
        case REMOVE_TODO_FAIL:
            return {
                ...state,
                error: true
            }
        default:
            return state
    }
}
