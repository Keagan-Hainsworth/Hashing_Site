import { useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  return (
    <div>
      <h2>Users List</h2>
      {users.length === 0 ? (
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              {user.username} - {user.email}
            </li>
          ))}
        </ul>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
};

export default Users;
