import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";

interface IAddFormProps {
  onAdd: (title: string) => void;
}

const TodoAddForm: React.FC<IAddFormProps> = ({ onAdd }) => {
  const [todoTitle, setTodoTitle] = useState<string>(``);

  return (
    <Grid item xs={12}>
      <TextField
        fullWidth
        label="Задача"
        variant="standard"
        onChange={(e) => setTodoTitle(e.currentTarget.value)}
        value={todoTitle}
        onKeyPress={addTodo}
      />
    </Grid>
  );

  function addTodo(e: React.KeyboardEvent<HTMLInputElement>): void {
    if (e.key === `Enter`) {
      onAdd(todoTitle);

      setTodoTitle(``);
    }
  }
};
export default TodoAddForm;
