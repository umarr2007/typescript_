import UserModel from "@/models/UserModel";
import { useState } from "react";

interface DeleteUser {
  userId: number;
  onDeleted?: () => void; // o‘chirilgandan keyin parentni yangilash uchun callback
}

const DeleteUser: React.FC<DeleteUser> = ({ userId, onDeleted }) => {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    try {
      await UserModel.delete(userId);
      if (onDeleted) onDeleted();
    } catch (error) {
      console.error(error);
      alert("Failed to delete user.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={handleDelete} disabled={loading}>
      {loading ? "Deleting..." : "Delete"}
    </button>
  );
};

export default DeleteUser;
