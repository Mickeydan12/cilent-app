import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/addtopayrol.css";
import Xbutton from "../assets/x button.svg";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import successicon from '../assets/Success Icon.svg'

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
     
      <Modal.Body  className="text-center px-5 py-4">
        <img src={successicon} alt="" />
        <h1>Created Successfully</h1>
        <p>Task has been created successfully!</p>
        <Link to={"/admin-dashboard/payroll"}>
         <Button onClick={props.onHide} className="continue-btn">Continue</Button>
        </Link>
       

      </Modal.Body>

    </Modal>
  );
}
const Addtopayrollt = () => {
  const [values, setValues] = useState({
    Employee: "",
    BaseSalary: "",
    Allowance: "",
    Deduction: "",
    Tax: "",
  });

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const cancelfun = (e) => {
    setValues({
      Employee: "",
      BaseSalary: "",
      Allowance: "",
      Deduction: "",
      Tax: "",
    });
  };
  const [modalShow, setModalShow] = React.useState(false);

  return (
    
    <>
      <main className="addtopayrool">
        <div className="addtopayrool-div">
          <div className=" payrool-div py-3 ">
            <h1>Add to Payroll </h1>
            <Link to={"/admin-dashboard/payroll"}>
              <img src={Xbutton} alt="" />
            </Link>
          </div>

          <form onSubmit={handleSubmit}>
            <label htmlFor="Employee" className="pb-2 py-3">
              Employee
            </label>
            <select
              name="Employee"
              id="Employee"
              className=""
              onChange={(e) => handleChanges(e)}
              value={values.Employee}
            >
              <option value="one">1</option>
              <option value="two">2</option>
              <option value="three">3</option>
            </select>

            <label htmlFor="BaseSalary " className="pb-2 py-3">
              Base Salary
            </label>
            <input
              type="text"
              placeholder=" N 0.00 "
              name="BaseSalary"
              onChange={(e) => handleChanges(e)}
              value={values.BaseSalary}
            />

            <label htmlFor="Allowance" className="pb-2 py-3">
              Allowance
            </label>
            <input
              type="Allowance"
              placeholder="N 0.00 "
              name="Allowance"
              onChange={(e) => handleChanges(e)}
              value={values.Allowance}
            />

            <label htmlFor="Deduction" className="pb-2 py-3">
              Deduction
            </label>
            <input
              type="Deduction"
              placeholder=" N 0.00"
              name="Deduction"
              onChange={(e) => handleChanges(e)}
              value={values.Deduction}
            />

            <label htmlFor="Tax" className="pb-2 py-3">
              Tax
            </label>
            <input
              type="text"
              placeholder="0% "
              name="Tax"
              onChange={(e) => handleChanges(e)}
              value={values.Tax}
            />

            <div className="d-flex  gap-5 justify-content-center py-5 ">
              <button
                type="button"
                className="payrol-cancel"
                onClick={cancelfun}
              >
                cancel
              </button >
              <button type="submit" className="payrol-add "  
                onClick={() => setModalShow(true)} >
                {" "}
                save
              </button>
            </div>
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />

          </form>
        </div>
      </main>
    </>
  );
};

export default Addtopayrollt;
