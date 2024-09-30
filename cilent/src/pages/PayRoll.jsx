import React from "react";
import { Link } from "react-router-dom";
import payrool1 from "../assets/Frame 1321316279.svg";
import payrol2 from "../assets/payroll 2.png";
import payrol3 from "../assets/payroll 3.png";

const PayRoll = () => {
  return (
    <>
      <main className="container">
        <div className="d-flex justify-content-between">
          <div>
            <h2>Payroll</h2>
            <p>Dashboard/Payroll</p>
          </div>
          <div className="mt-3">
            <Link to={"/addtopayroll"}>
              <button className="btn btn-danger">Add to Payroll</button>
            </Link>
          </div>
        </div>
        <div className="py-5">
          <img src={payrool1} alt="payroll-1" />
          <img src={payrol2} alt="payrol-2" />
          <img src={payrol3} alt="payrol-3" />
        </div>
      </main>
    </>
  );
};

export default PayRoll;
