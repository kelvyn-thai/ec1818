import Axios from "axios";
import { URL_SERVER_STATIC } from "../../../share/constant";
import { API_GET_LIST_TODOS, API_ADD_TODO, API_REMOVE_TODO } from "../constant";


export const apiFetchTodos = (data={}) => {
    const url = URL_SERVER_STATIC + API_GET_LIST_TODOS;
    return Axios.post(url, data);
}

export const apiAddTodo = (data={}) => {
    const url = URL_SERVER_STATIC + API_ADD_TODO;
    return Axios.post(url, data);
}

export const apiRemoveTodo = (data={}) => {
    const url = URL_SERVER_STATIC + API_REMOVE_TODO;
    return Axios.post(url, data);
}