import dashboardIcon from "../src/assets/dashboard.svg";
import employessIcon from "../src/assets/Employees.svg";
import taskboardIcon from "../src/assets/Taskboard.svg";
import leaveboardIcon from "../src/assets/Leaveboard.svg";
import payrollIcon from "../src/assets/Payroll.svg";
import settingsIcon from "../src/assets/settings.svg";
import peopleImg from "../src/assets/Frame 7.svg";
import taskImg from "../src/assets/Frame 7 (1).svg";
import calenderImg from "../src/assets/Frame 7 (2).svg";

export const sidebarLinks = [
  {
    id: 1,
    icon: dashboardIcon,
    name: "Dashboard",
    path: "",
  },
  {
    id: 2,
    icon: employessIcon,
    name: "Employess",
    path: "/admin-dashboard/employess",
  },
  {
    id: 3,
    icon: taskboardIcon,
    name: "TaskBoard",
    path: "/admin-dashboard/taskboard",
  },
  {
    id: 4,
    icon: leaveboardIcon,
    name: "LeaveBoard",
    path: "/admin-dashboard/leaveboard",
  },
  {
    id: 5,
    icon: payrollIcon,
    name: "PayRoll",
    path: "/admin-dashboard/payroll",
  },
  {
    id: 6,
    icon: settingsIcon,
    name: "Settings",
    path: "/admin-dashboard/settings",
  },
];

export const Dashboard = [
  {
    id: 1,
    names: "Total Employees",
    number: "24",
    Icons: peopleImg,
  },
  {
    id: 2,
    names: "Total Tasks",
    number: "107",
    Icons: taskImg,
  },
  {
    id: 3,
    names: "Current Leaves",
    number: "15",
    Icons: calenderImg,
  },
];
