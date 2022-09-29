import React from "react";
import Input from "../Input";
import { useState } from "react";
const Contact = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    leaveUsMessage: "",
  };
  const [{ firstName, lastName, email, phone, leaveUsMessage }, setData] =
    useState(initialValues);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-[#365150] text-white">
      <h1 className="text-6xl pt-10 pb-20 text-center font-semibold">
        Let's Work Together
      </h1>
      <div className="flex items-center justify-center pt-8 font-light  gap-8">
        <div>
          <h1>First Name</h1>
          <Input onChange={handleChange} value={firstName} name="firstName" />
        </div>
        <div>
          <h1>Last Name</h1>
          <Input onChange={handleChange} value={lastName} name="lastName" />
        </div>
      </div>
      <div className="flex items-center justify-center pt-8  font-light  gap-8">
        <div>
          <h1>Email *</h1>
          <Input onChange={handleChange} value={email} name="email" />
        </div>
        <div className="">
          <h1>Phone</h1>
          <Input onChange={handleChange} value={phone} name="phone" />
        </div>
      </div>
      <div className="pl-[768px] pt-4 font-light  ">
        <h1>Leave us a message...</h1>
        <Input
          onChange={handleChange}
          value={leaveUsMessage}
          name="leaveUsMessage"
        />
      </div>
      <div className="pl-[800px]">
        <button
          className="py-2 px-28 border border-white my-5"
          onClick={() => {
            const payload = {
              firstName,
              lastName,
              email,
              phone,
              leaveUsMessage,
            };
            console.log("payload", payload);
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
