import { Container, Paper, Typography } from "@material-ui/core";
import React from "react";
import "./App.css";
import Form from "./components/Form";
import Tasks from "./containers/Tasks";

function App() {
  return (
    <div className="App">
      <Container maxWidth="md">
        <Typography variant="h3">To-Do App</Typography>
        <Paper style={{ padding: 20 }}>
          <Form />
        </Paper>
        <Tasks />
      </Container>
    </div>
  );
}

export default App;
