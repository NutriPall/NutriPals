import React from "react";
import { useState } from "react";
import phone from "./images/phone-icon.png"
import email from "./images/email-icon.png";
import "./ContactUs.css";

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
      <h1 className="contact-us-title">We would love to hear from you</h1>
      <div className="contacts">
      <img id="phone-icon" src={phone} alt="email icon" />
      <img className="email-icon" src={email} alt="email icon" />
      <p className="phone-text">123123123</p>
      <p className="email-text">hellonutripal@nutripals.com</p>
      </div>
      <h2 className="contact-us-title">Leave us a message</h2>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">What's your name?</label>
        <p>First name</p>
        <input
          type="text"
          name="firstName"
          id="name"
          placeholder="Caroline"
          value={value.firstName}
          onChange={handleChange}
        />
        <p>Last name</p>
        <input
          type="text"
          name="lastName"
          id="name"
          placeholder="Forbes"
          value={value.lastName}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="carolineforbes@example.com"
          value={value.email}
          onChange={handleChange}
        />
        <label htmlFor="comments">Comments</label>
        <textarea
          name="comments"
          id="comments"
          placeholder="Let us know how we can improve."
          value={value.comments}
          onChange={handleChange}
          cols="30"
          rows="5"
        ></textarea>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ContactUs;
