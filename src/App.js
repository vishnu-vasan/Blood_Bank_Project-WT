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
        <Link to="/about">About</Link> | <Link to="/home">Home</Link> |{" "}
        <Link to="/addUser">Add Donor</Link>
        <Outlet />
      </nav>
    </div>
  );
}
