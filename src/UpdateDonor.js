import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormGroup, Label, Form } from "reactstrap";
import "./AddDonor.css";

export default function UpdateDonor(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(props);
  const id = props.id;
  const [donorDetails, setDonorDetails] = useState(props.donorData[0]);
  console.log("Received----" + id);
  console.log("Received----" + donorDetails.fname);
  const onSubmit = (data) => {
    console.log("------" + data.fname);
    console.log("Hi");
    axios
      .put("http://localhost:7800/updateUser/" + id, data)
      .then(function (response) {
        console.log(response);
        window.location.reload(false);
      })
      .catch(function (error) {
        console.log(error);
      });
    //window.location.reload(false);
  };
  console.log(errors);
  return (
    <div className="centerFlex">
      <h2>Update Donor Details</h2>
      <br />
      <div className="formContainer">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <input
              type="text"
              placeholder="First name"
              defaultValue={donorDetails.fname}
              {...register("fname", { required: true, maxLength: 50 })}
            />
          </FormGroup>

          <FormGroup>
            <input
              type="text"
              placeholder="Last name"
              defaultValue={donorDetails.lname}
              {...register("lname", { required: true, maxLength: 50 })}
            />{" "}
          </FormGroup>

          <FormGroup>
            <input
              type="text"
              placeholder="Email"
              defaultValue={donorDetails.email}
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />{" "}
          </FormGroup>

          <FormGroup>
            <input
              type="tel"
              placeholder="Mobile number"
              defaultValue={donorDetails.mobile}
              {...register("mobile", {
                required: true,
                minLength: 6,
                maxLength: 12,
              })}
            />{" "}
          </FormGroup>

          <FormGroup>
            <center>
              <Label>Blood Group : </Label>
            </center>
            <select
              defaultValue={donorDetails.bgroup}
              {...register("bgroup", { required: true })}
            >
              <option value="O +ve">O +ve</option>
              <option value="O -ve">O -ve</option>
              <option value="A +ve">A +ve</option>
              <option value="A -ve">A -ve</option>
              <option value="B +ve">B +ve</option>
              <option value="B -ve">B -ve</option>
              <option value="AB +ve">AB +ve</option>
              <option value="AB -ve">AB -ve</option>
            </select>{" "}
          </FormGroup>

          <FormGroup>
            <center>
              <Label>Region : </Label>
            </center>
            <select
              defaultValue={donorDetails.area}
              {...register("area", { required: true })}
            >
              <option value="North">North</option>
              <option value="South">South</option>
              <option value="East">East</option>
              <option value="West">West</option>
            </select>{" "}
          </FormGroup>

          <input type="submit" />
        </Form>
      </div>
    </div>
  );
}
