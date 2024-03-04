import React, { useState } from "react";

const TodoAddForm = () => {
  const [formData, setFormData] = useState({
    id: 0,
    title: "",
    description: "",
  });

  const handleInputData = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    //@ts-ignore
    setPosts([...post, formData]);
  };

  return (
    <div style={{ margin: "16px" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
      >
        <div>
          <label style={{ marginRight: "16px" }}>Title:</label>

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={(e) => {
              handleInputData(e);
            }}
          />
        </div>

        <div>
          <label style={{ marginRight: "16px" }}>Description:</label>

          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={(e) => {
              handleInputData(e);
            }}
          />
        </div>
        <button type="submit"> Add Todo </button>
      </form>
    </div>
  );
};

export default TodoAddForm;
