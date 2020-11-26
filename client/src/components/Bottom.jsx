import React from "react";
import { Button, TextField, Box } from "@material-ui/core";

function Bottom() {
  return (
    <footer>
      <Box display="flex">
        <TextField
          className="input-field"
          id="outlined-input"
          label="Input message"
          variant="outlined"
          fullWidth={true}
        />
        <Button className="send-button" variant="contained" color="primary">
          Send
        </Button>
      </Box>
    </footer>
  );
}

export default Bottom;
