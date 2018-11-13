import { ACTION_FETCHING_DATA, ACTION_FETCH_FAIL_DATA, ACTION_FETCHED_DATA } from "../constant";



const initialState = {
  data: {},
  error: false,
  msg: '',
  isFetching: false,
  isFetched: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_FETCHING_DATA:
      return {
        ...initialState,
        isFetching: true,
        msg: 'FETCHING DATA'
      }
    case ACTION_FETCHED_DATA:
      return {
        ...state,
        isFetched: true,
        msg: 'FETCHED DATA'
      }

    case ACTION_FETCH_FAIL_DATA:
      return {
        ...state,
        isFetching: false,
        isFetched: false,
        msg: 'FETCH FAIL DATA'
      }

    default:
      return state
  }
}
