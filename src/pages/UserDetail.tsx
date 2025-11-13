import { useEffect, useState } from "react";
import { useSearch } from "@tanstack/react-router";
import UserModel from "@/models/UserModel";
import type { User } from "@/models/User";
import { useNavigate } from "@tanstack/react-router";
import DeleteUser from "./DeleteUser";

const UserDetail = () => {
  const { id } = useSearch({ from: "/userdetail" });
  const [user, setUser] = useState<User | null>(null);

  const Navigate = useNavigate();

  useEffect(() => {
    if (!id) return;

    UserModel.getAll().then((users: User[]) => {
      const found = users.find((u) => u.id === id);
      setUser(found || null);
    });
  }, [id]);

  if (!user) return <p>Loading user...</p>;

  return (
    <div>
      <h2>User Detail</h2>
      <p>
        <b>Name:</b> {user.name}
      </p>
      <p>
        <b>Email:</b> {user.email}
      </p>
      <button
        onClick={() => Navigate({ to: "/edituser", search: { id: user.id } })}
      >
        Edit
      </button>
      <DeleteUser userId={user.id} onDeleted={() => Navigate({ to: "/" })} />
    </div>
  );
};

export default UserDetail;
