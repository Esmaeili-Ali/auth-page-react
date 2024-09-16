import React, { useEffect, useState } from "react";
import { Button, Input } from "react-daisyui";

const LoginPage = ({ setShowLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassowrd] = useState("");

  return (
    <div className="bg-cyan-500 flex text-white p-4 items-center gap-3 rounded-xl py-8 flex-col w-[350px] h-auto justify-center">
      <Input
        placeholder="Username"
        className="w-full"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <Input
        placeholder="Password"
        type="password"
        className="w-full"
        value={password}
        onChange={(e) => {
          setPassowrd(e.target.value);
        }}
      />
      <Button
        className="w-full"
        onClick={console.log("username:" + username, "password: " + password)}
      >
        Login
      </Button>
      <p className="text-black">
        Don't have an account?{" "}
        <button
          className="border-b-2 border-black"
          onClick={() => {
            setShowLogin(false);
          }}
        >
          Create Account
        </button>
      </p>
    </div>
  );
};

export default LoginPage;
