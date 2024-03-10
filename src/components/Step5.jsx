import React from "react";
import thankyou from "../assets/images/icon-thank-you.svg";

export default function Step5() {
  return (
    <div className="stepForm" id="thankYou">
      <img src={thankyou} />
      <h1>Thank you!</h1>
      <p className="formDescription" id="thankYouText">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        uvuvuevuevue@zzabolazza.osas
      </p>
    </div>
  );
}
