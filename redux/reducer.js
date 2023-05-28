import { combineReducers } from "redux";
import notificationReducer from "./slices/notification";

export const rootReducer = combineReducers({
  Notification: notificationReducer,
});