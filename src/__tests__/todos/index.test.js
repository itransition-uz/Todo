/** @jest-environment jsdom */
import React from "react";
import { screen, render, cleanup, fireEvent } from "@testing-library/react";
import Todos from "../../pages/todos";

const setup = (todos) => {
  render(
    <Todos
      todos={
        todos || [
          {
            id: "12scdfwef",
            title: "Learn JEST",
            created_at: new Date(),
          },
        ]
      }
    />
  );
};

it("Display Title", () => {
  setup();

  const title = screen.getByText(/ежедневные задачи:/i);

  expect(title).toBeInTheDocument();
});

it("adds todo", () => {
  setup();

  const input = screen.getByLabelText(/Задача/i);

  fireEvent.change(input, { target: { value: "Learn Typescript" } });
  fireEvent.keyPress(input, { key: "Enter", code: "Enter", charCode: 13 });

  const newTodo = screen.getByText(/Learn Typescript/i);

  expect(input).toBeInTheDocument();
  expect(newTodo).toBeInTheDocument();
});

it("removes todo", () => {
  setup([]);

  const deleteButton = screen.queryAllByRole("button", {
    name: /delete/i,
  });

  fireEvent.click(deleteButton[0]);
  fireEvent.click(deleteButton[1]);

  const removedTodo = screen.queryByText(/Learn Typescript/i);

  expect(removedTodo).not.toBeInTheDocument();
});
