// api/authService.js
import axiosInstance from "../configs/axiosConfig";
import UserDto from "../types/UserDto";
export const signUp = async (userDto: UserDto) => {
  console.log("signup clicked");
  try {
    const response = await axiosInstance.post("/api/signUp", userDto);
    console.log(response);
    return response.data;
  } catch (error) {
    // 에러 처리 로직
    console.error(error);
    throw error;
  }
};

export const signIn = async (userDto: UserDto) => {
  try {
    const response = await axiosInstance.post("/api/signIn", userDto);
    localStorage.setItem("jwt", response.data.token);
    console.log(response.data.token);
    return response.data;
  } catch (error) {
    // 에러 처리 로직
    console.error(error);
    throw error;
  }
};

export const hello = async () => {
  try {
    const response = await axiosInstance.get("/hello");
    console.log(response);
    console.log(response.data);
    return response.data;
  } catch (error) {
    // 에러 처리 로직
    console.error(error);
    throw error;
  }
};
