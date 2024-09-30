import React from "react";
import "../styles/checkemail.css";
import { Link } from "react-router-dom";
import logo from "../assets/Frame 1000003286.svg";
const CheckEmail = () => {
  return (
    <>
      <main className="CheckEmail">
        <div className="CheckEmail-wrapper">
          <div className="form-box login">
            <div className="d-flex gap-2  justify-content-center align-items-center fp-div-logoname ">
              <img src={logo} alt="logo" />
              <h2 className="CheckEmail-div-h2">HR Manager</h2>
            </div>
            <form>
              {" "}
              <div className="div-CheckEmail-password">
                <h2 className="CheckEmail-h2">Reset password</h2>
              </div>
              <div className="input-box py-2">
                <label>Enter password</label>
                <input type="email" placeholder="Enter New Password" />
              </div>
              <div className="input-box py-3 ">
                <label>confirm password</label>
                <input type="email" placeholder="Confirm New Password" />
              </div>
              <div className="py-5">
                <Link to={"/auth/signin"}>
                  <button className="reset-password ">Reset Password</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default CheckEmail;
