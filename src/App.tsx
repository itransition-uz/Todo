import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import { teal } from "@mui/material/colors";
import { Container, Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";

interface Todo {
  id: string;
  title: string;
  completed_at?: Date;
  deleted_at?: Date;
}

function App() {
  const [data, setData] = useState<Todo[]>([
    {
      id: "1234",
      title: "Typescript + MaterialUI",
    },
    {
      id: "1234",
      title: "Typescript + MaterialUI",
      completed_at: new Date(),
    },
  ]);

  return (
    <>
      <Box
        sx={{
          width: `100%`,
          height: 75,
          backgroundColor: teal.A400,
          display: `flex`,
          justifyContent: `center`,
          alignItems: `center`,
          color: `white`,
        }}
      >
        <h2>
          <Badge badgeContent={4} color={"info"}>
            Ежедневные задачи:
          </Badge>
        </h2>
      </Box>

      <Box
        sx={{
          width: `100%`,
          display: `flex`,
          justifyContent: `center`,
          alignItems: `center`,
          flexDirection: `column`,
          padding: `2rem 0rem`,
        }}
      >
        <Container maxWidth="sm">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="standard-basic"
                label="Задача"
                variant="standard"
                onKeyPress={(e) => {
                  e.key === `Enter` ? console.log(e) : "";
                }}
              />
            </Grid>
            {data.map((todo) => (
              <Grid
                container
                sx={{
                  paddingTop: `1rem`,
                }}
                alignItems="center"
              >
                <Grid xs={2}>
                  <Checkbox checked={!!todo.completed_at} />
                </Grid>

                <Grid xs={8}>
                  <Typography
                    sx={{
                      textDecoration: todo.completed_at ? `line-through` : "",
                    }}
                  >
                    MaterialUI + Typescript
                  </Typography>
                </Grid>

                <Grid xs={2}>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <IconButton aria-label="delete" size="small">
                      <ModeEditIcon fontSize="small" />
                    </IconButton>

                    <IconButton aria-label="delete" size="small">
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </Stack>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );

  function increment(): void {
    setData((data) =>
      data.concat({
        id: "123",
        title: "Typescript + MaterialUI",
      })
    );

    setData((data) =>
      data.concat({
        id: "1234",
        title: "Typescript + MaterialUI",
        completed_at: new Date(),
      })
    );
  }
}

export default App;
