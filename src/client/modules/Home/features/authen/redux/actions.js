import { LOGIN_SUCCESS, LOGIN_FAIL, LOGIN_REQUEST, LOGOUT } from "../constant";

export const loginSuccess = () => ({type: LOGIN_SUCCESS});
export const loginFail = () => ({type: LOGIN_FAIL});
export const loginRequest = () => ({type: LOGIN_REQUEST});
export const logoutRequest = () => ({type: LOGOUT});