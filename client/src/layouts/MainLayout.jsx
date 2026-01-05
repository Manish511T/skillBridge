import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const MainLayout = ({ children }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div>
      <header style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
        <span>Welcome, {user?.name}</span>
        <button onClick={handleLogout} style={{ marginLeft: 10 }}>
          Logout
        </button>
      </header>

      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
