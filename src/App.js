import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./routes/dashboard";
import Signup from "./routes/signup";
import Login from "./routes/login";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Create from "./routes/create";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { user, authIsReady } = useAuthContext();
  return (
    <div className=" flex">
      {authIsReady && (
        <BrowserRouter>
          {user && <Sidebar />}
          <div className="grow">
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={user ? <Dashboard /> : <Navigate to="/login" />}
              />
              <Route
                path="create"
                element={user ? <Create /> : <Navigate to="/login" />}
              />
              <Route
                path="signup"
                element={user ? <Navigate to="/" /> : <Signup />}
              />
              <Route
                path="login"
                element={user ? <Navigate to="/" /> : <Login />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
