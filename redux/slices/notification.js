import { createSlice } from "@reduxjs/toolkit";

export const Notification = createSlice({
  name: "notification",
  initialState: {
    open: false,
    message: "",
    vertical: "top",
    horizontal: "right",
    severity: "success",
    autoHideDuration: 1000,
  },
  reducers: {
    setNotification: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

const { setNotification } = Notification.actions;

export { setNotification };
export default Notification.reducer;