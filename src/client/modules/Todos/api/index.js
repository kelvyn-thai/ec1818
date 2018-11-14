import Axios from "axios";
import { URL_SERVER_STATIC } from "../../Shared/constant";
import { API_GET_LIST_TODOS } from "../constant";


export const apiFetchTodos = (data={}) => {
    const url = URL_SERVER_STATIC + API_GET_LIST_TODOS;
    return Axios.post(url, data);
}
