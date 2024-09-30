import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { sidebarLinks } from "../db";
import Hrlogo from "../assets/Frame 1000003286.svg";
import arrowup from "../assets/Vector.svg";
import arrowdown from "../assets/Vector (1).svg";
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../layout/Navbar";
import "../styles/AdminDashboard.css";

const AdminDashboard = () => {
  return (
    <>
      <main className="container-fluid">
        <section className="admin-dashboard-main">
          <section className="admin-dashboard-section-1 py-3">
            <div className="d-flex gap-2 pb-2">
              <div>
                <img src={Hrlogo} alt="hr-logo" />
              </div>
              <div className="d-flex justify-content-between gap-5">
                <div className="hr-manager">
                  <h1>HR manger</h1>
                  <p>hrmanager@yahoo.com</p>
                </div>
                <div className="arrow">
                  <div>
                    <img src={arrowup} alt="arrow-up" />
                  </div>
                  <div>
                    <img src={arrowdown} alt="arrow-down" />
                  </div>
                </div>
              </div>
            </div>

            {/* ---------------------------- */}
            <div className="py-3">
              <h3 className="main pt-4 ">MAIN MENU</h3>
              <div>
                {sidebarLinks.map((sidebarLinks) => {
                  const { id, path, icon, name } = sidebarLinks;
                  return (
                    <NavLink key={id} to={path} end>
                      {({ isActive, isPending }) => (
                        <span
                          className={`d-flex align-items-center gap-2 mb-3 isPending ? "pending" : ${
                            isActive ? "active" : ""
                          } `}
                        >
                          <img src={icon} alt={name} className="" />
                          <h6 className="pt-1 nav-link-header"> {name} </h6>
                        </span>
                      )}
                    </NavLink>
                  );
                })}
              </div>
            </div>
          </section>
          {/* section-2 */}
          <section>
            <Navbar />
            <Outlet />
          </section>
        </section>
      </main>
    </>
  );
};

export default AdminDashboard;
