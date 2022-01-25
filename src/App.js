import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Blood Bank project</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/addUser">Add Donor</Link> |{" "}
        <Link to="/donorInfo">View Donors</Link> |{" "}
        <Link to="/login">Admin Login</Link>
        <Outlet />
      </nav>
    </div>
  );
}
