import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import UserDto from "../types/UserDto"; // Adjust the import path as necessary

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: null as UserDto | null,
  },
  reducers: {
    setUserInfo: (state, action: PayloadAction<UserDto>) => {
      state.userInfo = action.payload;
      console.log("User info set to:", state.userInfo);
    },
    clearUserInfo: (state) => {
      state.userInfo = null;
    },
  },
});

export const { setUserInfo, clearUserInfo } = userSlice.actions;
export default userSlice.reducer;
