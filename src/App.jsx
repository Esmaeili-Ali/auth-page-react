import React, { useEffect, useState } from "react";
import { Button } from "react-daisyui";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";

const App = () => {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <div className="flex h-screen justify-center items-center">
      {showLogin ? (
        <LoginPage setShowLogin={setShowLogin} />
      ) : (
        <SignupPage setShowLogin={setShowLogin} />
      )}
    </div>
  );
};

export default App;
