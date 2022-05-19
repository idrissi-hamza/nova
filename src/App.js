import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./routes/dashboard";
import Project from "./routes/project";
import Signup from "./routes/signup";
import Login from "./routes/login";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <div className="h-screen">
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="project" element={<Project />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
