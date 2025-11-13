import UserModel from "@/models/UserModel";
import { Link, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

function AddUser() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const Navigate = useNavigate();

  const addUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await UserModel.add({ name, email, password });

    setName("");
    setEmail("");
    setPassword("");
    Navigate({ to: "/" });

  };

  return (
    <div>
      <Link to="/">Home</Link>
      <h2>Add User</h2>

      <form onSubmit={addUser}>
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
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default AddUser;
