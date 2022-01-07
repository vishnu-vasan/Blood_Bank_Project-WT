import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="First name"
        {...register("fname", { required: true, maxLength: 50 })}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Last name"
        {...register("lname", { required: true, maxLength: 50 })}
      />{" "}
      <br />
      <br />
      <input
        type="text"
        placeholder="Email"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />{" "}
      <br />
      <br />
      <input
        type="tel"
        placeholder="Mobile number"
        {...register("mobile", {
          required: true,
          minLength: 6,
          maxLength: 12,
        })}
      />{" "}
      <br />
      <br />
      <select {...register("bgroup", { required: true })}>
        <option value="O">O</option>
        <option value="A">A</option>
        <option value="B">B</option>
      </select>{" "}
      <br />
      <br />
      <input type="submit" />
    </form>
  );
}
