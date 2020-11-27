import Bottom from "./components/Bottom";
import MsgWindow from "./components/MessageWindow";
import NavBar from "./components/NavBar";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NavBar />
      <MsgWindow />
      <Bottom />
    </div>
  );
}

export default App;
