import React, { useState } from "react";

type todoFormProps = {
  formData?: {
    id: number;
    title: string;
    description: string;
  };
  handleSubmit: (e: any) => void;
  handleInputData: (e: any) => void;
};

const TodoAddForm = ({
  handleSubmit,
  handleInputData,
  formData,
}: todoFormProps) => {
  // const handleInputData = (e: any) => {

  // };

  // const handleSubmit = (e: any) => {
  //   //@ts-ignore
  //   setPosts([...post, formData]);
  // };

  return (
    <div className="formContainer" style={{ margin: "16px" }}>
      <div className="form">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
        >
          <div className="containers">
            <label htmlFor="" style={{ marginRight: "16px" }}>
              Title :
            </label>
            <input
              type="text"
              name="title"
              value={formData?.title}
              onChange={(e) => {
                handleInputData(e);
              }}
            />
          </div>

          <div className="containers">
            <label htmlFor="" style={{ marginRight: "16px" }}>
              Description :
            </label>
            <input
              type="text"
              name="description"
              value={formData?.description}
              onChange={(e) => {
                handleInputData(e);
              }}
            />
          </div>

          <button
            type="submit"
            className="button-success-color"
            style={{ marginTop: "8px" }}
          >
            {" "}
            Add Todo{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default TodoAddForm;
