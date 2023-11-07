import React from "react";

const Footer = () => {
  let currentYear = new Date().getFullYear();

  return (
    <h6
      style={{
        position: "fixed",
        bottom: "0",
        textAlign: "center",
        width: "100%",
      }}
    >
      Upright Project: React Chat
      <br />
      ChatMeUp Copyright {currentYear} &copy;
    </h6>
  );
};

export default Footer;