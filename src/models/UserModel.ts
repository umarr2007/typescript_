const API_URL = "https://api.lusy.obuna.com/api/v1/users";

const UserModel = {
  async getAll() {
    const res = await fetch(API_URL, {
      headers: { Accept: "application/json" },
    });
    const data = await res.json();
    if (Array.isArray(data)) return data;
    if (Array.isArray(data.data)) return data.data;
    return [];
  },

  async add(user: { name: string; email: string; password?: string }) {
    await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(user),
    });
  },

  async update(id: number, user: { name: string; email: string }) {
    await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(user),
    });
  },

  async delete(id: number) {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
      headers: { Accept: "application/json" },
    });
  },
};

export default UserModel;
