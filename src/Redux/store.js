import { createStore, combineReducers, applyMiddleware } from "redux";
import { petCenterReducer } from "./Petcenter/reducer";
import { petReducer } from "./Pet/reducer";
import { userReducer } from "./Users/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  pet: petReducer,
  user: userReducer,
  petcenter: petCenterReducer,
  
});

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
