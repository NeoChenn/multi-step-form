import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function LayoutBottom({ step, setStep, handleClick, isValid }) {
  const {
    handleSubmit
  } = useForm();
  console.log(isValid);
  const onSubmit = (data) => {
    if (isValid) {
      console.log("Form is valid");
      handleClick(nextStep.toString());
    } else {
      console.log("Form is invalid");
    }
  };
  const trueStep = step === "" ? "1" : step;
  const nextStep = Number(trueStep) + 1;
  const prevStep = Number(trueStep) - 1;
  const navigate = useNavigate();
  function handleClick(nextPage, e) {
    navigate(`${nextPage}`);
  }
  return (
    <form>
      <Outlet />
      {step === "5" ? null : (
        <footer>
          <button onClick={handleSubmit(onSubmit)}>
            {step === "4" ? "Confirm" : "Next Step"}
          </button>
          {step === "" ? (
            <button style={{ visibility: "hidden" }} disabled>
              Go Back
            </button>
          ) : (
            <button
              onClick={(e) =>
                prevStep === 1
                  ? navigate("")
                  : handleClick(prevStep.toString(), e)
              }
            >
              Go Back
            </button>
          )}
        </footer>
      )}
    </form>
  );
}
