import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import TodoList from "../cmp/todos/TodoList";
import Navbar from "../cmp/todos/Navbar";
import TodoAddForm from "../cmp/todos/TodoAddForm";
import { ITodo } from "../cmp/todos/interfaces";

interface IProps {
  todos: ITodo[];
}

function App(props: IProps) {
  const [todos, setTodos] = useState<ITodo[]>(props.todos || []);

  useEffect(() => {
    const storedTodos = JSON.parse(
      localStorage.getItem("todos") || JSON.stringify(props.todos)
    );

    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Navbar title={`Ежедневные задачи:`} />

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
