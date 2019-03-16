import React from "react";
import Mail from "../Contact/Mail/Mail";
import SocialMedia from "../Contact/SocialMedia/SocialMedia";
import "./Contact.css";

const contact = () => (
  <div className="Contact">
    <Mail />
    <SocialMedia />
  </div>
);

export default contact;
