import { Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AddNote from "./pages/AddNote";
import ViewNote from "./pages/ViewNote";
import NotFound from "./pages/NotFound";

function App() {
  const [isLogged, setIsLogged] = useState(true);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={isLogged ? <Home /> : <Navigate to="/login" />}
      />
      <Route
        path="/Home"
        element={isLogged ? <Home /> : <Navigate to="/login" />}
      />
      <Route
        path="/AddNote"
        element={isLogged ? <AddNote /> : <Navigate to="/login" />}
      />
      <Route
        path="/ViewNote"
        element={isLogged ? <ViewNote /> : <Navigate to="/login" />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
