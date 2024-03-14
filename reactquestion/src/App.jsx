import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);

  const toggleVisibilty = () => {
    setVisible(!visible);
  };

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

  const increment = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPost();
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

      <hr />
      <hr />
      <div className="">
        <h2>Counter: {count}</h2>
        <button onClick={increment}>Button</button>
      </div>

      <div className="box1">
        <h1>Posts</h1>
        <div className="">
          <ul>
            {posts.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="">
        <button onClick={toggleVisibilty}>
          {visible ? "Hide Message" : "Show Message"}
        </button>
        {visible && <p>This Is Hidden Message</p>}
      </div>
    </div>
  );
}

export default App;
