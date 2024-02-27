import React from "react";

type paragraphProps = {
  label: string;
};

const Paragraph = ({ label }: paragraphProps) => {
  return <p className="paragraph-cmponent">{label}</p>;
};

export default Paragraph;
