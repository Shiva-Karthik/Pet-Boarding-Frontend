import { GET_USER } from "./action";

const initState = {
  user: [],
  loading: false,
  error: false,
};

export const userReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case GET_USER:
      return { ...store, user: payload };
    default:
      return store;
  }
};