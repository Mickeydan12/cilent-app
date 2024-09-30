import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./auth/SignIn";
import ForgetPwd from "./Auth/Forgetpwd";
import CheckEmail from "./Auth/CheckEmail";
import AdminDashboard from "./pages/AdminDashboard";
import AdminSummary from "./pages/AdminSummary";
import Employee from "./Pages/Employee";
import TaskBoard from "./Pages/TaskBoard";
import LeaveBoard from "./Pages/LeaveBoard";
import PayRoll from "./pages/PayRoll";
import Settings from "./Pages/Settings";
import Error from "./Pages/Error";
import Addtopayrollt from "./buttonandlinktags/Addtopayrollt";
import Newtask from "./buttonandlinktags/Newtask";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/auth/signin" element={<SignIn />} />
          <Route path="/auth/forgotpassword" element={<ForgetPwd />} />
          <Route path="/auth/checkemail" element={<CheckEmail />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />}>
            <Route path="" element={<AdminSummary />} />
            <Route path="/admin-dashboard/employess" element={<Employee />} />
            <Route path="/admin-dashboard/taskboard" element={<TaskBoard />} />
            <Route
              path="/admin-dashboard/leaveboard"
              element={<LeaveBoard />}
            />
            <Route path="/admin-dashboard/payroll" element={<PayRoll />} />
            <Route path="/admin-dashboard/settings" element={<Settings />} />
          </Route>
          <Route path="/admin-dashboard/newtask" element={<Newtask />} />
          <Route path="/addtopayroll" element={<Addtopayrollt />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    
    </>
  );
}

export default App;
