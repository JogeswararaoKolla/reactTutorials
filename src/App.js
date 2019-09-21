import React from "react";
import HelloReact from "./components/HelloReact";

function App(props) {
  return (
    <div>
      <HelloReact message={props.message} />
      <HelloReact message={props.message} />
    </div>
  );
}

export default App;
