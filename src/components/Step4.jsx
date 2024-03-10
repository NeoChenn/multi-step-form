import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Step4({ subscription, addons, plan }) {
  const [step, setStep] = React.useState("");
  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = React.useState(0);

  useEffect(() => {
    setStep("4");
  }, []);

  const onSubmit = (data) => {
    handleClick(nextStep.toString());
  };

  const onBackSubmit = (data) => {
    handleClick(prevStep.toString());
  };

  const trueStep = step === "" ? "1" : step;
  const nextStep = Number(trueStep) + 1;
  const prevStep = Number(trueStep) - 1;

  function handleClick(nextPage) {
    navigate(`../${nextPage}`);
  }

  const subscriptionSelected = subscription ? "Yearly" : "Monthly";

  const PlanSubJsx = () => {
    return <h4>{`${plan} (${subscriptionSelected})`}</h4>;
  };

  const handleTotalPrice = (num) => {
    setTotalPrice((prev) => prev + num);
  };

  useEffect(() => {
    let total = planSubPrice();
    addons.forEach((addon) => {
      const addonPrice = addon === "Online service" ? 1 : 2;
      total += addonPrice;
    });
    setTotalPrice(total);
  }, [plan, addons]);

  const planSubPrice = () => {
    if (plan === "Arcade") {
      return 9;
    } else if (plan === "Advanced") {
      return 12;
    } else if (plan === "Pro") {
      return 15;
    }
    return 0;
  };

  const addonsJsx = addons.map((addon) => {
    const addonPrice = addon === "Online service" ? 1 : 2;
    return (
      <div className="subSummary" key={addon}>
        <p className="subSummaryText">{addon}</p>
        <p className="subSummaryPrice">{subscription ? `+$${addonPrice}0/yr` : `+$${addonPrice}/mo`}</p>
      </div>
    );
  });

  return (
    <form>
      <div className="stepForm">
        <h1>Finishing up</h1>
        <p className="formDescription">
          Double-check everything looks OK before confirming.
        </p>
        <div className="summaryContainer">
          <div className="summary">
            <div className="mainSummary">
              <div className="subSummary" id="centralSummary">
                <PlanSubJsx />
                <h4>
                  {subscription
                    ? `$${planSubPrice()}0/yr`
                    : `$${planSubPrice()}/mo`}
                </h4>
              </div>
              <span> </span>
            </div>
            {addonsJsx}
          </div>
          <div className="subSummary">
            <p className="subSummaryText">{subscription ? "Total (per year)" : "Total (per month)"}</p>
            <h2>
              {subscription ? `+$${totalPrice}0/yr` : `+$${totalPrice}/mo`}
            </h2>
          </div>
        </div>
      </div>
      {step === "5" ? null : (
        <footer className="buttons">
          <button onClick={onSubmit} className="nextStep">
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
            <button onClick={onBackSubmit} className="backStep">
              Go Back
            </button>
          )}
        </footer>
      )}
    </form>
  );
}
