import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./routes/dashboard";
import Signup from "./routes/signup";
import Login from "./routes/login";
import Create from "./routes/create";
import { useAuthContext } from "./hooks/useAuthContext";
import OnlineUsers from "./components/OnlineUsers";
import Project from "./routes/project/project";
import Bar from "./components/Bar";

function App() {
  const { user, authIsReady } = useAuthContext();
  return (
    <div className=" flex h-full">
      {authIsReady && (
        <BrowserRouter>
          <div className="grow  flex flex-col container ">
            <Bar />
            <div className="bg-[#2f4353cc] ">{user && <OnlineUsers />}</div>
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
            </div>
          </div>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
