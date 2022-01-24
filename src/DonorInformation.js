import React from "react";
import axios, { Axios } from "axios";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import { Outlet, Link } from "react-router-dom";

import "./DonorInformation.css";
import UpdateDonor from "./UpdateDonor";

export default function DonorInformation(props) {
  const [area, setArea] = useState("");
  const [details, setDetails] = useState(null);
  const [currArray, setCurrArray] = useState(null);
  const [showUpdate, setShowUpdate] = useState(false);
  const [donorId, setDonorId] = useState(null);
  const [donor, setDonor] = useState(null);
  const [isAdmin, setIsAdmin] = useState(true);
  //setDetails("All");
  var upd_donor;
  useEffect(() => {
    axios
      .get("http://localhost:7800/donorInfo")
      .then(function (response) {
        console.log(response.data);
        setDetails(response.data);
        setCurrArray(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const updateUser = (id) => {
    setDonorId(id);
    setShowUpdate(true);
    upd_donor = currArray.filter((item) => {
      console.log(id);
      return item.id == id;
    });
    console.log("--" + upd_donor[0].id);
    setDonor(upd_donor);
  };

  const deleteUser = (id) => {
    console.log("-------" + id);
    axios
      .delete("http://localhost:7800/deleteUser/" + id)
      .then(function (response) {
        console.log(response.data);
        alert("User with " + id + " deleted successfully!!!");
      })
      .catch(function (error) {
        console.log(error);
      });
    window.location.reload(false);
  };
  const changer = (event) => {
    let val = event.target.value;
    setArea(val);
    console.log(area);
    /*showDonor(val);*/
    let array = details;
    if (val != "All")
      array = details.filter((item) => {
        return item.area == val;
      });
    if (array.length == 0) array = null;

    setCurrArray(array);
  };

  return (
    <div>
      <center>
        <h2>Get Donors By Region</h2>
      </center>
      <div className="area-filter">
        <div className="area-filter__control">
          <select value={area} onChange={changer}>
            <option value="All">All</option>
            <option value="North">North</option>
            <option value="South">South</option>
            <option value="East">East</option>
            <option value="West">West</option>
          </select>
        </div>
      </div>
      {!currArray ? (
        area != "" ? (
          <center>
            <div className="nothingMsg">No donors available</div>
          </center>
        ) : (
          <div></div>
        )
      ) : (
        <center>
          <table className="donorTable">
            <thead>
              <tr>
                <th> ID </th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email ID</th>
                <th>Mobile Number</th>
                <th>Blood Group</th>
                <th colSpan={5}>Area</th>
              </tr>
            </thead>
            <tbody>
              {currArray.map((item) => {
                return (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.fname}</td>
                    <td>{item.lname}</td>
                    <td>{item.email}</td>
                    <td>{item.mobile}</td>
                    <td>{item.bgroup}</td>
                    <td colSpan={5}>{item.area}</td>
                    {isAdmin && (
                      <td>
                        {" "}
                        <Button
                          className="btn btn-warning"
                          onClick={() => updateUser(item.id)}
                        >
                          Update
                        </Button>{" "}
                        {/* </td>
                    <td> */}
                        <Button
                          className="btn btn-danger"
                          onClick={() => deleteUser(item.id)}
                        >
                          Delete
                        </Button>{" "}
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </center>
      )}
      {showUpdate && <UpdateDonor id={donorId} donorData={donor} />}
    </div>
  );
}
