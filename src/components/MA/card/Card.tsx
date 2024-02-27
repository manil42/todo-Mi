import React from "react";
import Header from "../Header/Header";
import Paragraph from "../paragraph/Paragraph";
import Button from "../button/Button";

const Card = () => {
  return (
    <div className="card-container">
      <div className="card-Header">
        <Header label="Todo List" />
      </div>
      <div className="card-paragraph">
        <Paragraph label="working on react component" />
      </div>
      <div className="card-Button">
        <Button label="Delete" isError />
      </div>
    </div>
  );
};

export default Card;
