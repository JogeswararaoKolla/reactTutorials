import React from "react";

function List(props) {
  return (
    <ul className="list-group">
      {props.groceries
        .filter(element => (element.purchased ? 0 : 1))
        .map(element => (
          <li key={element.id} className="list-group-item">
            name: {element.name}
          </li>
        ))}
    </ul>
  );
}

export default List;
