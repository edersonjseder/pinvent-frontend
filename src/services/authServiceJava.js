import axios from "axios";
import { toast } from "react-toastify";
import {
  JAVA_OAUTH_API_SERVICE_URL,
  JAVA_API_SERVICE_URL,
} from "../url/javaUrl";

/** Register user Java backend */
export const registerUsers = async (userData) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    console.log("URL: ", `${JAVA_OAUTH_API_SERVICE_URL}/api/v1/user/register`);
    const response = await axios.post(
      `${JAVA_OAUTH_API_SERVICE_URL}/api/v1/user/register`,
      userData,
      { withCredentials: false },
      config
    );

    if (response.statusText === "OK") {
      toast.success("User registered successfully");
    }

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

/** Login user */
export const loginUsers = async (userData) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axios.post(
      `${JAVA_OAUTH_API_SERVICE_URL}/api/v1/auth/login`,
      userData,
      { withCredentials: false },
      config
    );

    if (response.statusText === "OK") {
      toast.success("Login Successful...");
    }
    console.log("response: ", response);
    console.log("response.data: ", response.data);
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

/** Forgot password */
export const forgotPasswords = async (emailUser) => {
  try {
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await axios.post(
      `${JAVA_API_SERVICE_URL}/api/v1/users/forgotpassword`,
      emailUser,
      { withCredentials: false },
      headers
    );
    console.log(response);
    toast.success(response.data.emailSent);
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

/** reset password */
export const resetPasswords = async (userData, resetToken) => {
  try {
    const data = resetToken.split("&usrId=");

    console.log("Data: ", data);

    const headers = {
      "Content-Type": "application/json",
    };

    const response = await axios.put(
      `${JAVA_API_SERVICE_URL}/api/v1/users/changeuserpassword?id=${data[1]}&token=${data[0]}`,
      userData,
      { withCredentials: false },
      headers
    );
    console.log(response);
    return response.data.passwordChanged;
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
