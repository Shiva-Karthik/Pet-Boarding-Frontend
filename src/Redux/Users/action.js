export const GET_USER = "GET_USER";
export const GET_USER_LOADING = "GET_USER_LOADING";
export const GET_USER_ERROR = "GET_USER_ERROR";


export const getUser = (user) => ({ type: GET_USER, payload: user });