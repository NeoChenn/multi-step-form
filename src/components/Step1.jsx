import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function Step1({ setStep, setIsValid }) {
  useEffect(() => {
    setStep("");
  }, [setStep]);

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const {
    register,
    formState: { errors, isValid },
  } = useForm();

  useEffect(() => {
    setIsValid(isValid);
  }, [setIsValid, isValid]);

  return (
    <div className="step1Form">
      <h1>Personal info</h1>
      <p>Please prove your name, email address, and phone number.</p>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        placeholder="e.g. Stephen King"
        id="name"
        {...register("name", { required: true })}
      />
      {errors.name && <p>This field is required</p>}
      <label htmlFor="email">Email Address</label>
      <input
        type="email"
        placeholder="e.g. stephenking@lorem.com"
        id="email"
        {...register("email", { required: true, pattern: emailRegex })}
      />
      {errors.email && <p>This field is required</p>}
      <label htmlFor="number">Phone Number</label>
      <input
        type="number"
        placeholder="e.g. +1 234 567 890"
        id="number"
        {...register("number", { required: true })}
      />
      {errors.number && <p>This field is required</p>}
      {console.log(errors)}
    </div>
  );
}
