import React from "react";
import axios, { Axios } from "axios";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";

import "./DonorInformation.css";

export default function DonorInformation() {
  const [area, setArea] = useState("");
  const [details, setDetails] = useState(null);
  const [currArray, setCurrArray] = useState(null);
  //setDetails("All");

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
    console.log("-------" + id);
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
                  </tr>
                );
              })}
            </tbody>
          </table>
        </center>
      )}
    </div>
  );
}
