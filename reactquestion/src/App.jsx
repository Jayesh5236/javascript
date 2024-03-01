import "./App.css";
// import { useEffect, useState } from "react";
// import axios from "axios";

function App() {
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.get(
  //         "https://jsonplaceholder.typicode.com/users"
  //       );
  //       setUsers(res.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // const mapData = () => {
  //   const filterdData = users.filter((user) => {
  //     return user.name.includes("Chelsey Dietrich");
  //   });
  //   setUsers(filterdData)
  // };
  return (
    <div className="App">
    {/* <h1>Users</h1>
    
    {users.map((user) => (
      <div key={user.id}>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.username}</p>
      </div>
    ))} */}
    </div>
  );
}

export default App;
