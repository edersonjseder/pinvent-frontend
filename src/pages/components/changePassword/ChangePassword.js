import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { changePassword } from "../../../services/authService";
import Card from "../card/Card";
import Loader from "../loader/Loader";
import "./ChangePassword.scss";

const initialState = {
  oldPassword: "",
  password: "",
  confirmPassword: "",
};

const ChangePassword = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const { oldPassword, password, confirmPassword } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const changePass = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (password.length < 6) {
      setIsLoading(false);
      return toast.error("Password must be up to 6 characters");
    }

    if (password !== confirmPassword) {
      setIsLoading(false);
      return toast.error("Passwords do not match");
    }

    const formData = {
      oldPassword,
      password,
      confirmPassword,
    };

    const data = await changePassword(formData);

    toast.success(data);

    setIsLoading(false);

    navigate("/profile");
  };

  return (
    <div className="change-password">
      {isLoading && <Loader />}
      <Card cardClass="password-card">
        <h3>Change Password</h3>
        <form onSubmit={changePass}>
          <span className="password-data">
            <input
              type="password"
              placeholder="Old Password"
              required
              name="oldPassword"
              value={oldPassword}
              onChange={handleInputChange}
            />
            <input
              type="password"
              placeholder="Password"
              required
              name="password"
              value={password}
              onChange={handleInputChange}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              required
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleInputChange}
            />
            <div>
              <button type="submit" className="--btn --btn-primary">
                Change Password
              </button>
            </div>
          </span>
        </form>
      </Card>
    </div>
  );
};

export default ChangePassword;
