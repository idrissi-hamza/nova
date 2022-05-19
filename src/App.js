import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./routes/dashboard";
import Signup from "./routes/signup";
import Login from "./routes/login";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Create from "./routes/create";

function App() {
  return (
    <div className=" flex">
      <BrowserRouter>
        <Sidebar />
        <div className="grow">
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="create" element={<Create />} />
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
