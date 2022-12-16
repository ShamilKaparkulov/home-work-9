import { useState } from "react";
import "./App.css";
import FormUser from "./components/FormUser";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState([]);
  const addUser = (uName, uAge) => {
    setUsers([...users, { name: uName, age: uAge, id:Math.random().toString() }]);
  };

  const removeHandler = (id) => {
  setUsers(users.filter((item) => item.id !== id))
  }

  return (
    <div className="App">
      <FormUser onAddUser={addUser} />
      <UserList removeHandler={removeHandler} users={users} />
    </div>
  );
}

export default App;
