import { Fragment } from "react";
import Chat from "./Components/Chat/Chat";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css";


function App() {
  return (
  <Fragment>
    <NavBar />
    <Chat />
  </Fragment>
  );
}


export default App;