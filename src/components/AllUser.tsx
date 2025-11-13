import type { User } from "@/models/User";
import UserModel from "@/models/UserModel";
import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";

const AllUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  const allUsers = async () => {
    const data = await UserModel.getAll();
    setUsers(data);
  };

  useEffect(() => {
    allUsers();
  }, []);

  return (
    <div>
      <h2>All Users</h2>
      {users.length === 0 ? (
        <p>No users found</p>
      ) : (
        users.map((user) => (
          <div key={user.id} style={{ marginBottom: "10px" }}>
            <Link to="/userdetail" search={{ id: user.id }}>
              <h3 style={{ color: "blue", cursor: "pointer" }}>{user.name}</h3>
            </Link>

            <p>{user.email}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default AllUsers;
