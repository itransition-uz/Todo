/** @jest-environment jsdom */
import React from "react";
import { screen, render, cleanup, fireEvent } from "@testing-library/react";
import Todos from "../../pages/todos";

describe("Todos route", () => {
  beforeAll(() => {
    render(
      <Todos
        todos={[
          {
            id: "12scdfwef",
            title: "Learn JEST",
            created_at: new Date(),
          },
        ]}
      />
    );
  });

  it("Display Title", () => {
    const input = screen.getByLabelText(/asd/i);

    fireEvent.change(input, { target: { value: "Babur" } });

    expect(input).toBeInTheDocument();
  });

  afterAll(cleanup);
});
