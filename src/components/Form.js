import { Button, TextField } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import React from "react";

function Form() {
  return (
    <form style={{ display: "flex" }}>
      <TextField
        label="Add a task"
        variant="outlined"
        style={{ width: "90%" }}
        name="task"
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        endIcon={<Icon>send</Icon>}
        style={{ width: "10%" }}
      >
        Add
      </Button>
    </form>
  );
}

export default Form;
