import React from "react";

import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom"; // Notice the change here

import Todo from "./pages/Todo";
import AddTodo from "./pages/AddTodo";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Todo</Link>
            </li>
            <li>
              <Link to="/about">AddTodo</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/about" element={<AddTodo />} />
          <Route path="/" element={<Todo />} />
        </Routes>{" "}
      </div>
    </Router>
  );
}

export default App;
