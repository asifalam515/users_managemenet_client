import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  const handleAddUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const user = { name, email };
    fetch("", {})
      .then((res) => res.json)
      .then((data) => setUser(data));
  };
  return (
    <>
      <h1>Users Management System </h1>
      <h2>Users Found:{users.length} </h2>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" />
        <br />
        <input type="submit" value="Add User" />
      </form>
      <div>
        {users.map((user) => (
          <p key={user.id}>
            {" "}
            {user.id} :{user.name}:{user.email}
          </p>
        ))}
      </div>
    </>
  );
}

export default App;
