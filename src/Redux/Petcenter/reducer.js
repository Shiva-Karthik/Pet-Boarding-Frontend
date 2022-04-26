import {
  GET_PETCENTER,
  GET_PETCENTER_LOADING,
  GET_PETCENTER_ERROR,
  TOTALPAGE_COUNT,
  GET_PAGE
} from "./action";

const initState = {
  petcenter: [],
  loading: false,
  error: false,
  totalPages: 0,
  onepage:1
};

export const petCenterReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case GET_PETCENTER:
      return { ...store, petcenter: payload, loading: false };
    case GET_PETCENTER_LOADING:
      return { ...store, loading: true };
    case GET_PETCENTER_ERROR:
      return { ...store, error: true };
    case TOTALPAGE_COUNT:
      return { ...store, totalPages: payload };
    case GET_PAGE:
      return { ...store, onepage: payload };
    default:
      return store;
  }
};
