import React from "react";

const Footer = () => {
  const today = new Date();
  return (
    <footer className="app-footer">
      Copyright &copy; {today.getFullYear()}
    </footer>
  );
};

export default Footer;
