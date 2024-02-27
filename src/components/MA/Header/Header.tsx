import React from "react";

type HeaderProps = {
  label: String;
};

const Header = ({ label }: HeaderProps) => {
  return <header className="header-component">{label}</header>;
};

export default Header;
