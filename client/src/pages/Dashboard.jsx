import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard</h1>

      <p>
        You are logged in as <strong>{user?.name}</strong>
      </p>

      <p>Email: {user?.email}</p>
      <p>Role: {user?.role}</p>
    </div>
  );
};

export default Dashboard;
