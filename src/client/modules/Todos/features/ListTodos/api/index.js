import { URL_SERVER_STATIC } from "../../../../Shared/constant";
import { API_UPDATE_TODO, API_REMOVE_TODO } from "../constant";
import Axios from "axios";

export const apiChangeStatusTodo = (data) => {
    const url = URL_SERVER_STATIC + API_UPDATE_TODO;
    return Axios.post(url, data);
}

export const apiRemoveTodo = (data) => {
    const url = URL_SERVER_STATIC + API_REMOVE_TODO;
    return Axios.post(url, data);
}