import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  FormGroup, Label, Input,
  Button, Form
} from 'reactstrap';
import "./AddDonor.css";

export default function AddDonor() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("------" + data.fname);
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
    <div className="centerFlex">
      <h2>Donate Blood</h2><br />
      <div className="formContainer">
        <Form onSubmit={handleSubmit(onSubmit)}>
          
          <FormGroup>
            <Input
              type="text"
              placeholder="First name"
              {...register("fname", { required: true, maxLength: 50 })}
            />
          </FormGroup>

          <FormGroup>
            <Input
              type="text"
              placeholder="Last name"
              {...register("lname", { required: true, maxLength: 50 })}
            />{" "}
          </FormGroup>

          <FormGroup>
            <Input
              type="text"
              placeholder="Email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />{" "}
          </FormGroup>

          <FormGroup>
            <Input
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
            <select {...register("bgroup", { required: true })}>
              <option value="O">O</option>
              <option value="A">A</option>
              <option value="B">B</option>
            </select>{" "}
          </FormGroup>

          <FormGroup>
            <input type="submit" />
          </FormGroup>

        </Form>
      </div>
    </div>
  );
}
