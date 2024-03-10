import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import checkmark from "../assets/images/icon-checkmark.svg";

export default function Step3({ subscription, setAddons, addons }) {
  const [step, setStep] = React.useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setStep("3");
  }, [setStep]);

  const { register, handleSubmit } = useForm();

  function selectedAddons(data) {
    const keys = Object.keys(data);
    const values = Object.values(data);
    for (let i = 0; i <= keys.length; i++) {
      if (values[i]) {
        setAddons((prev) => {
          return [...prev, keys[i]];
        });
      }
    }
  }

  const onSubmit = (data) => {
    setAddons([]);
    selectedAddons(data);
    handleClick(nextStep.toString());
  };

  const onBackSubmit = (data) => {
    setAddons([]);
    selectedAddons(data);
    handleClick(prevStep.toString());
  };

  const trueStep = step === "" ? "1" : step;
  const nextStep = Number(trueStep) + 1;
  const prevStep = Number(trueStep) - 1;

  function handleClick(nextPage) {
    navigate(`../${nextPage}`);
  }

  return (
    <form>
      <div className="stepForm">
        <h1>Pick add-ons</h1>
        <p className="formDescription">
          Add-ons help enhance your gaming experience
        </p>
        <div className="addonContainer">
          <div className="checkboxContainer">
            <input
              type="checkbox"
              id="addonOne"
              {...register("Online service")}
              defaultChecked={addons.includes("Online service") ? true : false}
            />
            <div className="checkmark">
              <img src={checkmark} />
            </div>
            <label htmlFor="addonOne" className="labelTrue">
              <h4 className="addonH4">Online service</h4>
              <p className="addonP">Access to multiplayer games</p>
            </label>
            <p className="addonPrice">{subscription ? "+10$/yr" : "+1$/mo"}</p>
          </div>
          <div className="checkboxContainer">
            <input
              type="checkbox"
              {...register("Larger storage")}
              id="addonTwo"
              defaultChecked={addons.includes("Larger storage") ? true : false}
            />
            <div className="checkmark">
              <img src={checkmark} id="oddContainer" />
            </div>
            <label htmlFor="addonTwo">
              <h4 className="addonH4">Larger storage</h4>
              <p className="addonP">Extra 1TB of cloud save</p>
            </label>
            <p className="oddAddonPrice">
              {subscription ? "+20$/yr" : "+2$/mo"}
            </p>
          </div>
          <div className="checkboxContainer">
            <input
              type="checkbox"
              {...register("Customizable profile")}
              id="addonThree"
              defaultChecked={
                addons.includes("Customizable profile") ? true : false
              }
            />
            <div className="checkmark">
              <img src={checkmark} />
            </div>
            <label htmlFor="addonThree" className="labelTrue">
              <h4 className="addonH4">Customizable Profile</h4>
              <p className="addonP">Custom theme on your profile</p>
            </label>
            <p className="addonPrice">{subscription ? "+20$/yr" : "+2$/mo"}</p>
          </div>
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
