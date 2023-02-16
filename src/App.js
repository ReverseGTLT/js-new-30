import React from "react";
import './App.css';
import Counter from "./store/Counter/Counter";
import Todo from "./store/actions/reducers/Todo/Todo";

function App() {
  return (
    <>
      <Counter />
      <Todo />
    </>
  );
}

export default App;