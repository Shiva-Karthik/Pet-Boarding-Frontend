export const GET_PET = "GET_PET";
export const GET_PET_LOADING = "GET_PET_LOADING";
export const GET_PET_ERROR = "GET_PET_ERROR";


export const getPet = (pet) => ({ type: GET_PET, payload: pet });
