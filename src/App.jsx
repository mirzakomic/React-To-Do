import React, { useState } from "react";

import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };

    // fügt das Todo der Liste hinzu
    setList([...list, newTodo]);

    //input-field wir zurückgesetzt
    setInput("");
  };

  const deleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  };

  const strikeTodo = (id) => {
    const newList = list.map((todo) => {
      if (todo.id === id) {
        // Toggle the "completed" property
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });

    setList(newList);
  };

  return (
    <>
      <div className="wrap-add-container">
        <div className="wrap-add">
          <input
            placeholder="Type task here"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={() => addTodo(input)}>&#43;</button>
        </div>
      </div>
      <div className="shadow">
        <ul>
          {list.map((todo) => (
            <li key={todo.id}>
              <p className={todo.completed ? "completed" : "todo-name-class"}>
                {todo.todo}
              </p>
              <div className="buttons-li">
                <button onClick={() => deleteTodo(todo.id)}>&times;</button>
                <button onClick={() => strikeTodo(todo.id)}>&#10004;</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
