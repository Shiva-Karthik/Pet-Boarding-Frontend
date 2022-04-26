import { GET_PET } from "./action";

const initState = {
  pet: [],
  loading: false,
  error: false,
};

export const petReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case GET_PET:
      return { ...store, pet: payload };
    default:
      return store;
  }
};
