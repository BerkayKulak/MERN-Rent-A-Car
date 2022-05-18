import axios from "axios";
import { message } from "antd";

export const userLogin = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    const response = await axios.post(
      "http://localhost:5000/api/users/login",
      reqObj
    );
    localStorage.setItem("user", JSON.stringify(response.data.user));
    message.success("Login Successful");
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    message.error("Login Failed");
    dispatch({ type: "LOADING", payload: false });
  }
};

export const userRegister = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    const response = await axios.post(
      "http://localhost:5000/api/users/login",
      reqObj
    );
    dispatch({ type: "LOADING", payload: false });
    message.success("Register Successful");
  } catch (error) {
    message.error("Register Failed");
    dispatch({ type: "LOADING", payload: false });
  }
};
