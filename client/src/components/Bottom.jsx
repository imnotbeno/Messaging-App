import React from "react";
import { TextField } from "@material-ui/core";

function Bottom() {
  return (
    <footer>
      <TextField
        id="outlined-basic"
        label="Input Message"
        variant="outlined"
        fullWidth={true}
      />
    </footer>
  );
}

export default Bottom;
