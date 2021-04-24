import React from "react";

const Footer = () => {
  return (
    <div style={{ height: "15vh", position: "realtive" }}>
      <p
        style={{
          fontWeight:"600",
          position: "absolute",
          bottom: "5px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        Iva Filipović © 2021
      </p>
    </div>
  );
};

export default Footer;
