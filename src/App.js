import { useEffect, useState } from "react";
import "./styles.css";
import User from "./components/User";
import AddUserForm from "./components/AddUserForm";

export default function App() {
  const [users, setUsers] = useState([]);
  const handleAddUser = (newUser) => {
    setUsers([...users, newUser]);
  };
  useEffect(() => {
    fetch("https://65c05be725a83926ab96327e.mockapi.io/rsupport/users")
      .then((response) => response.json())
      // 4. Setting *dogImage* to the image url that we received from the response above
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <AddUserForm addUser={handleAddUser} />
      <br />
      {users?.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
}
