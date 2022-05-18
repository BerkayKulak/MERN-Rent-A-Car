import axios from "axios";
import { message } from "antd";

export const bookCar = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    await axios.post("http://localhost:5000/api/bookings/bookcar");

    dispatch({ type: "LOADING", payload: false });
    message.success("Booking Successful");
  } catch (error) {
    dispatch({ type: "LOADING", payload: false });
    message.error("Booking Failed");
  }
};
