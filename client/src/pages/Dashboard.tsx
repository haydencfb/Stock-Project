import Dashboard from "../components/Dashboard";
import Footer from "../components/Footer";

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Dashboard />
      <main className="flex-grow p-4">
        <h1 className="text-3xl font-bold">Welcome to Your Dashboard</h1>
        {/* Additional dashboard content goes here */}
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;