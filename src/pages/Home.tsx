import AllUser from "@/components/AllUser";
import { Link, Outlet } from "@tanstack/react-router";

const Home = () => {
  return (
    <div>
      <header>
        <Link style={{ marginRight: "10px" }} to="/">Home</Link>
        <Link to="/adduser">Add User</Link>
      </header>
      <AllUser/>
      <Outlet/>
    </div>
  );
};

export default Home;
