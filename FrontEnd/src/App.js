import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Registration from "./components/Registration.js";
import SignIn from "./components/SignIn.js";

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/Registration" element={<Registration />} />
          <Route path="/SignIn" element={<SignIn />} />
        </Routes>
    </Router>
  );
};

export default App;

