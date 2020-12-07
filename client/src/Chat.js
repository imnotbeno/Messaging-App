import App from "./App";
import Login from "./Login";

var isLoggedIn = false;

function Chat() {
  return <div>
      {isLoggedIn ? (<App />) : (<Login />)}
  </div>;
}

export default Chat;
