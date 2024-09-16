import React, { useState } from "react";
import { Button, Input, Toggle } from "react-daisyui";

const SignupPage = ({ setShowLogin }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    recieveEmail: false,
  });

  return (
    <div className="bg-cyan-500 flex text-white p-4 items-center gap-3 rounded-xl py-8 flex-col w-[400px] h-auto justify-center">
      <div className="flex gap-2">
        <Input
          placeholder="First Name"
          className="w-1/2"
          value={formData.firstName}
          onChange={(e) => {
            const newFormData = { ...formData };
            newFormData.firstName = e.target.value;
            setFormData(newFormData);
          }}
        />
        <Input
          placeholder="Last Name"
          className="w-1/2"
          value={formData.lastName}
          onChange={(e) => {
            const newFormData = { ...formData };
            newFormData.lastName = e.target.value;
            setFormData(newFormData);
          }}
        />
      </div>
      <Input
        className="w-full"
        placeholder="Username"
        value={formData.username}
        onChange={(e) => {
          const newFormData = { ...formData };
          newFormData.username = e.target.value;
          setFormData(newFormData);
        }}
      />
      <Input
        className="w-full"
        placeholder="Email"
        type="email"
        value={formData.email}
        onChange={(e) => {
          const newFormData = { ...formData };
          newFormData.email = e.target.value;
          setFormData(newFormData);
        }}
      />
      <div className="flex gap-2">
        <Input
          type="password"
          placeholder="Password"
          className="w-1/2"
          value={formData.password}
          onChange={(e) => {
            const newFormData = { ...formData };
            newFormData.password = e.target.value;
            setFormData(newFormData);
          }}
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          className="w-1/2"
          value={formData.confirmPassword}
          onChange={(e) => {
            const newFormData = { ...formData };
            newFormData.confirmPassword = e.target.value;
            setFormData(newFormData);
          }}
        />
      </div>
      <div className="flex justify-between w-full text-black">
        <p className="font-semibold">Recive Emails : </p>
        <Toggle
          checked={formData.recieveEmail}
          onChange={(e) => {
            const newFormData = { ...formData };
            newFormData.recieveEmail = e.target.checked;
            setFormData(newFormData);
          }}
        />
      </div>
      <Button className="w-full" onClick={console.log(formData)}>
        SignUp
      </Button>
      <p className="text-black">
        Already have an account?
        <button
          className="border-b-2 border-black"
          onClick={() => {
            setShowLogin(true);
          }}
        >
          Log In
        </button>
      </p>
    </div>
  );
};

export default SignupPage;
