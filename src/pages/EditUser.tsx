import { useState, useEffect, type FormEvent } from "react";
import { useSearch, useNavigate } from "@tanstack/react-router";
import UserModel from "@/models/UserModel";
import type { User } from "@/models/User";



function EditUser() {
  const { id: userId } = useSearch({ from: "/edituser" });

  const navigate = useNavigate();

  // Form state
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  // Foydalanuvchi ma’lumotini olish
  useEffect(() => {
    if (!userId) return;

    UserModel.getAll().then((users: User[]) => {
      const found = users.find((u) => u.id === userId);
      if (found) {
        setName(found.name);
        setEmail(found.email);
      }
      setLoading(false);
    });
  }, [userId]);

  // Form submit
  const handleEdit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userId) return;

    await UserModel.update(userId, {
      name,
      email,
    });

    navigate({ to: "/" });
  };

  if (loading) return <p>Loading user data...</p>;

  return (
    <div>
      <h2>Edit User</h2>

      <form onSubmit={handleEdit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
       
        <button type="submit">Update User</button>
      </form>
    </div>
  );
}

export default EditUser;
