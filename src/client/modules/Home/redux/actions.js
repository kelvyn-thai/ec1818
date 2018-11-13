import { ACTION_FETCHING_DATA, ACTION_FETCHED_DATA, ACTION_FETCH_FAIL_DATA } from "../constant";

export const fetchData = () => ({type: ACTION_FETCHING_DATA});
export const fetchedData = () => ({type: ACTION_FETCHED_DATA});
export const fetchFailData = () => ({type: ACTION_FETCH_FAIL_DATA});