import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import About from "./About";
import AddDonor from "./AddDonor";
import reportWebVitals from "./reportWebVitals";
import DonorInformation from "./DonorInformation";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="addUser" element={<AddDonor />} />
      <Route path="donorInfo" element={<DonorInformation />} />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
      {/* </Route> */}
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
