import React from "react";
import { Button, TextField} from "@material-ui/core";

function Bottom() {
  return (
    <footer>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <Button variant="contained" color="primary">
        Save
      </Button>
    </footer>
  );
}

export default Bottom;
