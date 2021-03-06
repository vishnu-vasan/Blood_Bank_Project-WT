import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormGroup, Label, Button, Form } from "reactstrap";
import "./AddDonor.css";

export default function AddDonor() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("------" + data.fname);
    console.log("Hi");
    axios
      .post("http://localhost:7800/addUser", data)
      .then(function (response) {
        console.log(response);
        window.location.reload(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  console.log(errors);
  return (
    <>
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
      <div className="centerFlex">
        <h2>Donate Blood</h2>
        <br />
        <div className="formContainer">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <input
                type="text"
                placeholder="First name"
                {...register("fname", { required: true, maxLength: 50 })}
              />
            </FormGroup>

            <FormGroup>
              <input
                type="text"
                placeholder="Last name"
                {...register("lname", { required: true, maxLength: 50 })}
              />{" "}
            </FormGroup>

            <FormGroup>
              <input
                type="text"
                placeholder="Email"
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />{" "}
            </FormGroup>

            <FormGroup>
              <input
                type="tel"
                placeholder="Mobile number"
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
              <select {...register("bgroup", { required: true })}>
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
              <select {...register("area", { required: true })}>
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
    </>
  );
}
