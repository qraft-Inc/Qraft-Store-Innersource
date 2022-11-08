import React from "react";
import { useForm } from "react-hook-form";
import logo from "./logo.svg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useState } from "react";
import axios from "axios";
const qraft = new URL("./images/qraft.png", import.meta.url);

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (e) => {
    e.preventDefault();
    const user = {
      name: this.state.name,
    };
    axios
      .post("https://qraft-store-api.herokuapp.com/api/auth/register", { user })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        window.location = "/retrieve"; //This line of code will redirect you once the submission is succeed
      });
  };
  const handleChange = (e) => {
    this.setState({ name: e.target.value });
  };

  // render() {
  return (
    <section>
      <div className="register">
        <div className="col-1">
          <h1>Create an account</h1>
          <div className="bord">
            <span>WELCOME TO</span>
            <img src={qraft} className="qraftlogo" />
            <span>Sign up to get your favourite gig</span>
            <form
              id="form"
              className="flex flex-col"
              onSubmit={handleChange(onSubmit)}
            >
              <input
                type="text"
                placeholder="Username"
                {...register("username", { required: true })}
                onChange="handleChange"
                aria-invalid={errors.username ? "true" : "false"}
              />
              {errors.username?.type === "required" && (
                <p role="alert" className="errormsg">
                  username is required
                </p>
              )}

              <input
                type="text"
                placeholder="Email"
                {...register("email", {
                  required: "Email Address is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "invalid email address",
                  },
                })}
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email && (
                <p className="errormsg">{errors.email.message}</p>
              )}

              <input
                type="password"
                placeholder="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must have at least 8 characters",
                  },
                })}
                aria-invalid={errors.password ? "true" : "false"}
              />
              {errors.password && (
                <p className="errormsg">{errors.password.message}</p>
              )}

              <input
                type="password"
                placeholder="confirmpassword"
                {...register("confirmPassword", {
                  required: "ConfirmPassword is required",
                })}
                aria-invalid={errors.confirmPassword ? "true" : "false"}
              />
              {errors.confirmPassword && (
                <p className="errormsg">{errors.confirmPassword.message}</p>
              )}

              <button className="btn">Sign in</button>
              {/* <HorizontalRule className ="line"/>or sign up with
                  <HorizontalRule className ="line"/> */}
              <p>______ or sign up with _____</p>
              <div className="icons">
                <LinkedInIcon />
                <GoogleIcon />
                <TwitterIcon />
              </div>
            </form>
          </div>
        </div>
        <div className="col-2">
          <p>
            Qraft Store is a marketplace platform that connects independent
            artists to people or bussines with gigs.
          </p>
          <h4>Qraft Market Place</h4>
          <span>From Experts</span>
        </div>
      </div>
    </section>
  );
  // }
}
