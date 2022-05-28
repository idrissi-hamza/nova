import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./routes/dashboard";
import Signup from "./routes/signup";
import Login from "./routes/login";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Create from "./routes/create";
import { useAuthContext } from "./hooks/useAuthContext";
import OnlineUsers from "./components/OnlineUsers";
import Project from "./routes/project/project";

function App() {
  const { user, authIsReady } = useAuthContext();
  return (
    <div className=" flex h-full ">
       {authIsReady && (
        <BrowserRouter>
          {user && <Sidebar />}
          <div className="grow  flex flex-col ">
            <Navbar />
            <div className="flex grow  ">
              <div className="grow">
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
                    path="project/:id"
                    element={user ? <Project /> : <Navigate to="/login" />}
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
              {user && <OnlineUsers />}
            </div>
          </div>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
