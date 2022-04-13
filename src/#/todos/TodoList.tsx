import React, { useReducer, useState } from "react";
import { Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import { ITodo } from "./interfaces";

interface IProps {
  todos: ITodo[];
  onCheck: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoList: React.FC<IProps> = ({ todos, onCheck, onDelete }) => {
  return (
    <Grid>
      {todos.map(
        (todo, index) =>
          !todo.deleted_at && (
            <Grid
              key={index}
              container
              sx={{
                paddingTop: `1rem`,
              }}
              alignItems="center"
            >
              <Grid xs={2}>
                <Checkbox
                  checked={todo.completed_at ? true : false}
                  onClick={() => onCheck(todo.id)}
                />
              </Grid>

              <Grid xs={8}>
                <Typography
                  sx={{
                    textDecoration: todo.completed_at ? `line-through` : "",
                  }}
                >
                  {todo.title}
                </Typography>
              </Grid>

              <Grid xs={2}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <IconButton aria-label="delete" size="small">
                    <ModeEditIcon fontSize="small" />
                  </IconButton>

                  <IconButton
                    aria-label="delete"
                    size="small"
                    onClick={() => onDelete(todo.id)}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Stack>
              </Grid>
            </Grid>
          )
      )}
    </Grid>
  );
};

export default TodoList;
