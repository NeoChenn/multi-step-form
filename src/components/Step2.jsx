import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import arcadeImage from "../assets/images/icon-arcade.svg";
import advancedImage from "../assets/images/icon-advanced.svg";
import proImage from "../assets/images/icon-pro.svg";

export default function Step2({
  subscription,
  setSubscription,
  plan,
  setPlan,
}) {
  const [step, setStep] = React.useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setStep("2");
  }, [setStep]);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setPlan(data.plan);
    handleClick(nextStep.toString());
  };

  const onBackSubmit = (data) => {
    setPlan(data.plan);
    handleClick(prevStep.toString());
  };

  const trueStep = step === "" ? "1" : step;
  const nextStep = Number(trueStep) + 1;
  const prevStep = "";

  function handleClick(nextPage) {
    navigate(`../${nextPage}`);
  }

  function handlePlan(e) {
    setSubscription((prev) => !prev);
    e.preventDefault();
  }
  return (
    <form>
      <div className="stepForm">
        <h1>Select your plan</h1>
        <p className="formDescription">
          You have the option of monthly or yearly billing
        </p>
        <div className="planContainer">
          <div className="radioContainer">
            <input
              {...register("plan")}
              type="radio"
              id="arcade"
              name="plan"
              value="Arcade"
              defaultChecked={plan === "Arcade" ? true : false}
            />
            <img src={arcadeImage} />
            <label htmlFor="arcade" className="radioButton">
              <h4>Arcade</h4>
              {subscription ? <p>$90/yr</p> : <p>$9/mo</p>}
              {subscription ? <h5>2 months free</h5> : null}
            </label>
          </div>
          <div className="radioContainer">
            <input
              {...register("plan")}
              id="advanced"
              type="radio"
              name="plan"
              value="Advanced"
              defaultChecked={plan === "Advanced" ? true : false}
            />
            <img src={advancedImage} />
            <label htmlFor="advanced" className="radioButton">
              <h4>Advanced</h4>
              {subscription ? <p>$120/yr</p> : <p>$12/mo</p>}
              {subscription ? <h5>2 months free</h5> : null}
            </label>
          </div>
          <div className="radioContainer">
            <input
              {...register("plan")}
              id="pro"
              type="radio"
              name="plan"
              value="Pro"
              defaultChecked={plan === "Pro" ? true : false}
            />
            <img src={proImage} />
            <label htmlFor="pro" className="radioButton">
              <h4>Pro</h4>
              {subscription ? <p>$150/yr</p> : <p>$15/mo</p>}
              {subscription ? <h5>2 months free</h5> : null}
            </label>
          </div>
        </div>
        <div className="planSwitch">
          <p>Monthly</p>
          <button onClick={handlePlan}>
            <span className={subscription ? "yearly" : "monthly"}>00</span>
          </button>
          <p>Yearly</p>
        </div>
      </div>
      {step === "5" ? null : (
        <footer className="buttons">
          <button onClick={handleSubmit(onSubmit)} className="nextStep">
            {step === "4" ? "Confirm" : "Next Step"}
          </button>
          {step === "" ? (
            <button
              style={{ visibility: "hidden" }}
              disabled
              className="backStep"
            >
              Go Back
            </button>
          ) : (
            <button onClick={handleSubmit(onBackSubmit)} className="backStep">
              Go Back
            </button>
          )}
        </footer>
      )}
    </form>
  );
}
