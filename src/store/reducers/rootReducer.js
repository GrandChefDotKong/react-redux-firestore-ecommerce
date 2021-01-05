import ItemsReducer from "./itemsReducer";
import OrdersReducer from "./ordersReducer";
import authReducer from "./authReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  items: ItemsReducer,
  auth: authReducer,
  orders: OrdersReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
