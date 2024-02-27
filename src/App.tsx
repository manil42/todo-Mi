import { useState, useEffect } from "react";

function App() {
  const [post, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/todo")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  [];
  console.log("+++", post);

  return <></>;
}

export default App;
