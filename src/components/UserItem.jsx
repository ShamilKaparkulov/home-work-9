import React, { useState } from "react";
import  ReactDOM  from "react-dom";
import ModalWindow from "./ModalWindow";
import Card from "./UI/Card";

function UserItem({ name, age, id, remove }) {
  const [isModal, setIsModal] = useState(false);
  return (
    <Card>
      <li key={id}>
        {name} {`(age: ${age} years old)`}
      </li>
      {isModal &&
        ReactDOM.createPortal(
          <ModalWindow
            onRemove={() => remove(id)}
            onClose={() => setIsModal(false)}
          />,
          document.getElementById("modal")
        )}
      <button onClick={() => setIsModal((prev) => !prev)}>delete</button>
    </Card>
  );
}

export default UserItem;
