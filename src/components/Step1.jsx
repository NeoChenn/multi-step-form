import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Step1() {
  const [step, setStep] = React.useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setStep("");
  }, [setStep]);

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    getValues,
  } = useForm({
    defaultValues: {
      name: JSON.parse(sessionStorage.getItem("name")) || "",
      email: JSON.parse(sessionStorage.getItem("email")) || "",
      number: JSON.parse(sessionStorage.getItem("number")) || "",
    },
  });

  const onSubmit = (data) => {
    if (isValid) {
      sessionStorage.setItem("email", JSON.stringify(data.email));
      sessionStorage.setItem("name", JSON.stringify(data.name));
      sessionStorage.setItem("number", JSON.stringify(data.number));
      handleClick(nextStep.toString());
    } else {
      console.log("Form is invalid");
    }
  };

  const trueStep = step === "" ? "1" : step;
  const nextStep = Number(trueStep) + 1;
  const prevStep = Number(trueStep) - 1;

  function handleClick(nextPage) {
    navigate(`${nextPage}`);
  }

  return (
    <form>
      <div className="stepForm">
        <h1>Personal info</h1>
        <p className="formDescription">
          Please prove your name, email address, and phone number.
        </p>
        <div className="inputTop">
          <label htmlFor="name">Name</label>
          {errors.name && <p>This field is required</p>}
        </div>
        <input
          type="text"
          placeholder="e.g. Stephen King"
          id="name"
          style={{ borderColor: errors.name ? "var(--Strawberry-red)" : null }}
          {...register("name", { required: true })}
        />
        <div className="inputTop">
          <label htmlFor="email">Email Address</label>
          {errors.email && getValues("email") === "" && (
            <p>This field is required</p>
          )}
          {errors.email && getValues("email") !== "" && (
            <p>Incorrect formatting</p>
          )}
        </div>
        <input
          type="email"
          placeholder="e.g. stephenking@lorem.com"
          id="email"
          style={{ borderColor: errors.email ? "var(--Strawberry-red)" : null }}
          {...register("email", { required: true, pattern: emailRegex })}
        />
        <div className="inputTop">
          <label htmlFor="number">Phone Number</label>
          {errors.number && <p>This field is required</p>}
        </div>
        <input
          type="number"
          placeholder="e.g. +1 234 567 890"
          id="number"
          style={{
            borderColor: errors.number ? "var(--Strawberry-red)" : null,
          }}
          {...register("number", { required: true })}
        />
      </div>
      {step === "5" ? null : (
        <footer className="buttons">
          <button onClick={handleSubmit(onSubmit)} className="nextStep">
            {step === "4" ? "Confirm" : "Next Step"}
          </button>
          {step === "" ? (
            <button style={{ visibility: "hidden" }} disabled className="backStep">
              Go Back
            </button>
          ) : (
            <button onClick={() => handleClick(prevStep.toString())} className="backStep">
              Go Back
            </button>
          )}
        </footer>
      )}
    </form>
  );
}
