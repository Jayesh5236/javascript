import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Users</h1>
      <div className="user">
        {users.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
<hr />
      <div className="user-title">
        {users.map((user) => (
          <div key={user.id}>{user.email}</div>
        ))}
      </div>
<hr />
      <div className="user-phone">
        {users.map((user) => (
          <div key={user.id}>{user.phone}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
