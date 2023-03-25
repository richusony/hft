import { useState, useEffect } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const res = await fetch("/api/users");
      const data = await res.json();
      setUsers(data);
    }
    getUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.user_id}>{user.email}</li>
        ))}
      </ul>
    </div>
  );
}
