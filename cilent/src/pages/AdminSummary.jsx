import React from "react";
import { Dashboard } from "../db";
import "../styles/AdminSummary.css";

const AdminSummary = () => {
  return (
    <>
      <main className="summary-container">
        <section className="pt-4">
          <h1 className="dash">Dashboard</h1>
          <div className="d-flex justify-content-between d-md-block dashboard-flex d-lg-flex">
            {Dashboard.map((Dashboards) => {
              const { id, names, number, Icons } = Dashboards;
              return (
                <div
                  key={id}
                  className="d-flex justify-content-between dashboard-flex pt-5"
                >
                  <div className="total">
                    <h4>{names}</h4>
                    <h1>{number} </h1>
                  </div>
                  <div>
                    <img src={Icons} alt="dashbaord-images" />
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
};

export default AdminSummary;
