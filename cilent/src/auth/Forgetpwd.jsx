import React from "react";
import { Link } from "react-router-dom";
import "../styles/Forgetpwd.css";
import logo from "../assets/Frame 1000003286.svg";

const Forgetpwd = () => {
  return (
    <>
      <main className="forgetpwd">
        <div className="forgetpwd-wrapper">
          <div className="form-box login">
            <div className="d-flex gap-2  justify-content-center align-items-center fp-div-logoname ">
              <img src={logo} alt="logo" />
              <h2 className="fp-div-h2">HR Manager</h2>
            </div>
            <form>
              {" "}
              <div className="div-forget-password">
                <h2 className="forgetpwd-h2">Forgot password</h2>
                <p className="forgetpwd-p">
                  Enter your email address to rest your password.
                </p>
              </div>
              <Link to={"/auth/checkemail"}>
                <button className="reset-password">Reset Password</button>
              </Link>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Forgetpwd;
