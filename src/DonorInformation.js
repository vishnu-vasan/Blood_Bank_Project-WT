import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import "./DonorInformation.css";
import UpdateDonor from "./UpdateDonor";

export default function DonorInformation() {
  const [area, setArea] = useState("");
  const [bgroup, setBgroup] = useState("");
  const [details, setDetails] = useState(null);
  const [currArray, setCurrArray] = useState(null);
  const [showUpdate, setShowUpdate] = useState(false);
  const [donorId, setDonorId] = useState(null);
  const [donor, setDonor] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
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
    // if (window.sessionStorage.getItem("Admin123")) setIsAdmin(true);
    if (localStorage.getItem("googleid") && localStorage.getItem("gmailid"))
      setIsAdmin(true);
  }, []);

  const updateUser = (id) => {
    setDonorId(id);
    setShowUpdate(true);
    upd_donor = currArray.filter((item) => {
      console.log(id);
      return item.id === id;
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
    //alert(val);
    /*showDonor(val);*/
    let array = details;
    if (val !== "All")
      array = details.filter((item) => {
        return item.area === val;
      });

    if (bgroup !== "All" && bgroup !== "")
      array = array.filter((item) => {
        return item.bgroup === bgroup;
      });

    if (array.length === 0) array = null;

    setCurrArray(array);
  };
  const changerblood = (event) => {
    let val = event.target.value;
    setBgroup(val);
    console.log(val);
    //alert(val);
    /*showDonor(val);*/
    let array = details;
    if (val !== "All")
      array = details.filter((item) => {
        return item.bgroup === val;
      });

    if (area !== "All" && area !== "")
      array = array.filter((item) => {
        return item.area === area;
      });

    if (array.length === 0) array = null;

    setCurrArray(array);
  };

  const logoutUser = () => {
    // window.sessionStorage.removeItem("Admin123");
    window.localStorage.removeItem("googleid");
    window.localStorage.removeItem("gmailid");
    setIsAdmin(false);
    window.location.reload(false);
  };
  return (
    <div>
      <div>
        <Button
          className="btn btn-success"
          onClick={() => (window.location.href = "home")}
          style={{ float: "left", margin: "5px" }}
        >
          Go to Home
        </Button>
        {"\n"}
      </div>
      {isAdmin && (
        <div>
          <Button
            className="btn btn-secondary"
            onClick={() => logoutUser()}
            style={{ float: "right", margin: "5px" }}
          >
            Logout
          </Button>
          {"\n"}
        </div>
      )}
      {!isAdmin && (
        <div>
          <Button
            className="btn btn-secondary"
            onClick={() => (window.location.href = "login")}
            style={{ float: "right", margin: "5px" }}
          >
            Admin Login
          </Button>
          {"\n"}
        </div>
      )}
      <br />
      <br />
      <center>
        <h2>Get Donors By Region and Blood Group</h2>
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
      <div className="area-filter">
        <center>
          <label>Blood Group</label>
        </center>
        <div className="area-filter__control">
          <select value={bgroup} onChange={changerblood}>
            <option value="All">All</option>
            <option value="O +ve">O +ve</option>
            <option value="O -ve">O -ve</option>
            <option value="A +ve">A +ve</option>
            <option value="A -ve">A -ve</option>
            <option value="B +ve">B +ve</option>
            <option value="B -ve">B -ve</option>
            <option value="AB +ve">AB +ve</option>
            <option value="AB -ve">AB -ve</option>
          </select>
        </div>
      </div>
      {!currArray ? (
        area !== "" ? (
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
