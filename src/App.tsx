import { useState, useEffect } from "react";
import Card from "./components/Card/Card";
import Button from "./components/Button/Button";
import { SassNumber } from "sass";
function App() {
  const [post, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/todo")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  [];

  const handleAdd = () => {
    //@ts-ignore
    setPosts([...post, { id: 3, title: "todo3", description: "hello" }]);
  };

  const handleEdit = () => {
    console.log("Edit button is clicked");
  };
  const handleDelete = (id: number) => {
    console.log("id", id);
    const copyData = [...post];
    const data = copyData.filter((data: any) => data.id !== id);
    setPosts([...data]);
  };

  return (
    <>
      <div>
        <div style={{ margin: "16px" }}>
          <Button label="Add Todo" handleClick={handleAdd} />
        </div>
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
