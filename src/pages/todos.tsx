import React, { useState } from "react";
import { Container, Grid } from "@mui/material";
import TodoList from "../#/todos/TodoList";
import Navbar from "../#/todos/Navbar";
import TodoAddForm from "../#/todos/TodoAddForm";
import { ITodo } from "../#/todos/interfaces";

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  return (
    <>
      <Navbar />

      <Container maxWidth="sm" sx={{ padding: `1rem` }}>
        <TodoAddForm onAdd={addHandler} />
        <TodoList
          todos={todos}
          onCheck={checkHandler}
          onDelete={deleteHandler}
        />
      </Container>
    </>
  );

  function addHandler(title: string): void {
    setTodos((todos) =>
      todos.concat({
        id: uuid(),
        title: title,
      })
    );
  }

  function checkHandler(id: string): void {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        !todo.completed_at
          ? (todo.completed_at = new Date())
          : (todo.completed_at = undefined);
      }

      return todo;
    });

    setTodos(newTodos);
  }

  function deleteHandler(id: string): void {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.deleted_at = new Date();
      }

      return todo;
    });

    setTodos(newTodos);
  }

  function uuid() {
    return Math.random().toString(16).slice(2);
  }
}

export default App;
