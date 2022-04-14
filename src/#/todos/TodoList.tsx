import React, { useReducer, useState } from "react";
import { Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import { ITodo } from "./interfaces";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
  outline: "none",
};

interface IProps {
  todos: ITodo[];
  onCheck: (id: string) => void;
  onEdit: ({ newTitle, id }: { newTitle: string; id: string }) => void;
  onDelete: (id: string) => void;
}

const TodoList: React.FC<IProps> = ({ todos, onCheck, onDelete, onEdit }) => {
  const [editedTodo, setEditedTodo] = useState<{ id: string; title: string }>({
    id: "",
    title: "",
  });

  const [modalStatus, setModalStatus] = useState<boolean>(false);

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
                  <IconButton
                    aria-label="delete"
                    size="small"
                    onClick={() =>
                      editHandler({
                        id: todo.id,
                        title: todo.title,
                      })
                    }
                  >
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
      <Modal
        open={modalStatus}
        onClose={() => setModalStatus(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Редактировать:"
              variant="standard"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEditedTodo((prev) => ({
                  id: prev.id,
                  title: e.target.value,
                }))
              }
              defaultValue={editedTodo.title}
              onKeyPress={onEditSubmit}
            />
          </Grid>
        </Box>
      </Modal>
    </Grid>
  );

  function onEditSubmit(e: React.KeyboardEvent) {
    if (e.key === `Enter`) {
      onEdit({
        id: editedTodo.id,
        newTitle: editedTodo.title,
      });

      setModalStatus(false);
    }
  }

  function editHandler(params: { title: string; id: string }) {
    setEditedTodo(params);

    setModalStatus(true);
  }
};

export default TodoList;
