import { useState, useEffect } from "react";
import Card from "./components/Card/Card";
function App() {
  const [post, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/todo")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  [];

  const handleEdit = () => {
    console.log("Edit button is clicked");
  };
  const handleDelete = () => {
    console.log("Delete button is clicked");
  };

  return (
    <>
      <div>
        {post?.map((data: any) => (
          // <div style={{border:"solid 1px black"}}>
          // <h1>{data.title}</h1>
          // <p>{data.description}</p>
          // </div>
          <div>
            <Card
              title={data.title}
              description={data.description}
              handleEdit={() => {
                handleEdit;
              }}
              handleDelete={handleDelete}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
