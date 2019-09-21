import React from "react";

function HelloReact(props) {
  return (
    <div>
      <p>Welcome to React !!!</p>
      <p>Hello {props.message}</p>
    </div>
  );
}

export default HelloReact;
