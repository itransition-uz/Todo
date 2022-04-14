import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import TodoList from "../#/todos/TodoList";
import Navbar from "../#/todos/Navbar";
import TodoAddForm from "../#/todos/TodoAddForm";
import { ITodo } from "../#/todos/interfaces";

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos") || `[]`);

    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Navbar />

      <Container maxWidth="sm" sx={{ padding: `1rem` }}>
        <TodoAddForm onAdd={addHandler} />
        <TodoList
          todos={todos}
          onCheck={checkHandler}
          onEdit={editHandler}
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
        created_at: new Date(),
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

  function editHandler({ newTitle, id }: { newTitle: string; id: string }) {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.title = newTitle;
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
