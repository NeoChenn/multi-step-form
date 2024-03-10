import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Step1 from "./components/Step1.jsx";
import Step2 from "./components/Step2.jsx";
import Step3 from "./components/Step3.jsx";
import Step4 from "./components/Step4.jsx";
import Step5 from "./components/Step5.jsx";
import Layout from "./Layout/Layout.jsx";

function App() {
  const [subscription, setSubscription] = React.useState(false);
  const [plan, setPlan] = React.useState("Arcade");
  const [addons, setAddons] = React.useState([]);
  return (
    <Router>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="" element={<Step1 />} />
          <Route
            path="2"
            element={
              <Step2
                subscription={subscription}
                setSubscription={setSubscription}
                plan={plan}
                setPlan={setPlan}
              />
            }
          />
          <Route
            path="3"
            element={
              <Step3
                subscription={subscription}
                addons={addons}
                setAddons={setAddons}
              />
            }
          />
          <Route
            path="4"
            element={<Step4 subscription={subscription} addons={addons} plan={plan}/>}
          />
          <Route path="5" element={<Step5 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
