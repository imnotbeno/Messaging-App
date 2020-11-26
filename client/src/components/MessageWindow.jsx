import React from "react";
import Box from "@material-ui/core/Box";

function MsgWindow() {
  return (
    <Box>
      <Box className="msg-window" display="flex">
        <h1>HELLO!</h1>
      </Box>
      <Box className="msg-window2" display="flex" flexDirection="row-reverse">
        <h1>HI!</h1>
      </Box>
    </Box>
  );
}

export default MsgWindow;
