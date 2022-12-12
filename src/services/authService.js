import axios from "axios";
import { toast } from "react-toastify";

export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

/** Register user */
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/api/users/register`,
      userData,
      { withCredentials: true }
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
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/api/users/login`,
      userData
    );

    if (response.statusText === "OK") {
      toast.success("Login Successful...");
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

/** Logout user */
export const logoutUser = async () => {
  try {
    await axios.get(`${BACKEND_URL}/api/users/logout`);
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
export const forgotPassword = async (emailUser) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/api/users/forgotpassword`,
      emailUser
    );
    toast.success(response.data.message);
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
export const resetPassword = async (userData, resetToken) => {
  try {
    const response = await axios.put(
      `${BACKEND_URL}/api/users/resetpassword/${resetToken}`,
      userData
    );
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

/** Get Login Status */
export const getLoginStatus = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/users/loggedin`);
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

/** Get user Profile */
export const getUserProfile = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/users/profile`);
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

/** Update user Profile */
export const updateUserProfile = async (formData) => {
  try {
    const response = await axios.patch(
      `${BACKEND_URL}/api/users/update`,
      formData
    );
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

/** Change password */
export const changePassword = async (formData) => {
  try {
    const response = await axios.patch(
      `${BACKEND_URL}/api/users/changepassword`,
      formData
    );
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
