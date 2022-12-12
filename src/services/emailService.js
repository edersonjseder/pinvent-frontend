import axios from "axios";
import { toast } from "react-toastify";

export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

/** Send email */
export const sendEmailContact = async (data) => {
  try {
    const response = await axios.post(`${BACKEND_URL}/api/contact/send`, data);
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
    console.log(message);
    console.log("ERROR: ", error);
  }
};
