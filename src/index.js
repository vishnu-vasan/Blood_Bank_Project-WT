import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import AddDonor from "./AddDonor";
import UpdateDonor from "./UpdateDonor";
import reportWebVitals from "./reportWebVitals";
import DonorInformation from "./DonorInformation";
import Login from "./Login";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="addUser" element={<AddDonor />} />
      <Route path="updateUser" element={<UpdateDonor />} />
      <Route path="donorInfo" element={<DonorInformation />} />
      <Route path="login" element={<Login />} />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
      {/* </Route> */}
      <Route render={() => <h1>404: not found</h1>} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
