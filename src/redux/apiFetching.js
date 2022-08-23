import axios from "axios";
import { loginFailure, loginStart, loginSuccess, logout } from "./userSlice";
import {addUser} from "./registerSlice";
import { useDispatch } from "react-redux";
import { apiRequest } from "../pages/configAxios";
// const dspch=useDispatch();

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await apiRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
export const register = async (user) => {
  // dispatch(addUser());
  try {
    await apiRequest.post("/auth/register", user);
  } catch (err) {
    // dispatch(loginFailure());
  }
};