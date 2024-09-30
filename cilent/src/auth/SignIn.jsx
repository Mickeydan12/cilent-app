import React from "react";
import "../styles/Signin.css";
import { Link } from "react-router-dom";
import logo from "../assets/Frame 1000003286.svg";

const SignIn = () => {
  return (
    <>
      <main className="signin">
        <div className="wrapper">
          <div className="form-box login">
            <div className="d-flex justify-content-center align-items-center div-logoname ">
              <img src={logo} alt="logo" />
              <h2 className="div-h2">HR Manager</h2>
            </div>
            <form action="">
              <h1 className="py-3">
                Welcome to HR Manager - Where Creativity Meets Opportunity!
              </h1>
              <div className="input-box mt-2">
                <label className="Email">Email</label>
                <input type="email" placeholder="Enter Email" />
              </div>
              <div className="input-box  ">
                <label className="password ">
                  password
                  <Link to={"/auth/forgotpassword"}>ForgetPassword?</Link>
                </label>

                <input type="password" placeholder="Enter password" />
              </div>
              <Link to={"/admin-dashboard"}>
                <button className="login">login</button>
              </Link>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default SignIn;
