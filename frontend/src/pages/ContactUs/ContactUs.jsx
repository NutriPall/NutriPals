import React from "react";
import { useState } from "react";
import phone from "./images/phone-icon.png"
import email from "./images/email-icon.png";

const ContactUs = () => {
  const [value, setValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
  });

  const handleSubmit = (e) => e.preventDefault();
  const handleChange = (e) =>
    setValue({ ...value, [e.target.name]: e.target.value });
  //   const handleChangeComments = (e) => setValue({...value, comments:e.target.value})
  //   const handleChangeFirstName = (e) => setValue({...value, name,first:e.target.value})
  //   const handleChangeLastName = (e) => setValue({...value, name,last:e.target.value})

  return (
    <div>
      ContactUs
      <h1>We would love to hear from you</h1>
      <img src={phone} alt="email icon" />
      <p>123123123</p>
      <img src={email} alt="email icon" />
      <p>randomdude@gmail.com</p>
      <h2>Message us</h2>
      <h3>Talk to us for feedback</h3>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="firstName"
          id="name"
          value={value.firstName}
          onChange={handleChange}
        />
        <p>First</p>
        <input
          type="text"
          name="lastName"
          id="name"
          value={value.lastName}
          onChange={handleChange}
        />
        <p>Last</p>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={value.email}
          onChange={handleChange}
        />
        <label htmlFor="comments">Comments</label>
        <textarea
          name="comments"
          id="comments"
          value={value.comments}
          onChange={handleChange}
          cols="30"
          rows="10"
        ></textarea>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ContactUs;
