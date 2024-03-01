import { useState, useEffect } from "react";
import Card from "./components/Card/Card";
function App() {
  const [post, setPosts] = useState([]);

  const [formData, setFormData] = useState({
    id: 0,
    title: "",
    description: "",
  });

  useEffect(() => {
    fetch("http://localhost:3001/todo")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  [];

  // const handleAdd = () => {
  //   //@ts-ignore
  //   setPosts([...post, { id: 3, title: "todo3", description: "hello" }]);
  // };

  const handleEdit = () => {
    console.log("Edit button is clicked");
  };
  const handleDelete = (id: number) => {
    console.log("id", id);
    const copyData = [...post];
    const data = copyData.filter((data: any) => data.id !== id);
    setPosts([...data]);
  };

  const handleInputData = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value, id: post.length + 1 });
    console.log("handleinput data", name, value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // console.log(post);
    //@ts-ignore
    setPosts([...post, formData]);
  };

  return (
    <>
      <div>
        <div style={{ margin: "16px" }}>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputData}
            />
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleInputData}
            />
            <button type="submit"> Add Todo</button>
          </form>
        </div>
        {post?.map((data: any) => (
          <div>
            <Card
              title={data.title}
              description={data.description}
              handleEdit={() => {
                handleEdit;
              }}
              handleDelete={() => {
                handleDelete(data.id);
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
