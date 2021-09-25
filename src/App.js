import { Typography } from "@material-ui/core";
import React from "react";
import Form from "./components/Form";
import Tasks from "./containers/Tasks";

function App() {
  return (
    <div className="App">
      <Typography variant="h3">To-Do App</Typography>
      <Form />
      <Tasks />
    </div>
  );
}

export default App;
