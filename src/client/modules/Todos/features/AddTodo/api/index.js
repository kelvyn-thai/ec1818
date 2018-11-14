import Axios from "axios";
import { URL_SERVER_STATIC } from "../../../../Shared/constant";
import { API_ADD_TODO } from "../constant";


export const apiAddTodo = (data={}) => {
    const url = URL_SERVER_STATIC + API_ADD_TODO;
    return Axios.post(url, data);
}