import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import UsersPage from "./pages/UsersPage";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-[#F8F9FA] text-[#151D48] overflow-hidden">
        <Sidebar />

        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<UsersPage />} />
          </Routes>
        </div>
      </div>
      <Analytics />
    </Router>
  );
}

export default App;
