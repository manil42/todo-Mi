import React, { useState } from "react";
import TodoAddForm from "../components/todoAddForm/TodoAddForm";
import { useNavigate } from "react-router-dom";

const AddTodo = () => {
  const navigation = useNavigate();
  const [formData, setFormData] = useState({
    id: 3,
    title: "",
    description: "",
  });
  const handleSubmit = async (event: any) => {
    setFormData({ ...formData, id: formData.id + 1 });
    try {
      const response = await fetch("http://localhost:3001/todo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Todo created successfully");
        navigation("/", { replace: true });
      } else {
        console.log("failed to create todo");
      }
    } catch (error) {
      console.log("Error:", error);
    }

    console.log("formData", formData);
  };

  const handleInputData = (event: any) => {
    const { name, value } = event.target;
    console.log(name, value);
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <TodoAddForm
        handleSubmit={(e: any) => {
          handleSubmit(e);
        }}
        handleInputData={(e: any) => {
          handleInputData(e);
        }}
        formData={formData}
      />
    </div>
  );
};

export default AddTodo;
