import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Step1 from "./components/Step1.jsx";
import Step2 from "./components/Step2.jsx";
import Step3 from "./components/Step3.jsx";
import Step4 from "./components/Step4.jsx";
import Step5 from "./components/Step5.jsx";
import Layout from "./Layout/Layout.jsx";
import LayoutButton from "./Layout/LayoutBottom.jsx";

function App() {
  const [step, setStep] = React.useState("");
  const [isValid, setIsValid] = React.useState(false)
  return (
    <Router>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route
            path=""
            element={
              <LayoutButton
                step={step}
                setStep={setStep}
                isValid={isValid}
              />
            }
          >
            <Route path="" element={<Step1 setStep={setStep} setIsValid={setIsValid}/>} />
            <Route path="2" element={<Step2 setStep={setStep} />} />
            <Route path="3" element={<Step3 setStep={setStep} />} />
            <Route path="4" element={<Step4 setStep={setStep} />} />
            <Route path="5" element={<Step5 setStep={setStep}/>} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
