import Navbar from "../components/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-6xl mx-auto p-6">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
