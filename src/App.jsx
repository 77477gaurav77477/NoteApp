import { Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AddNote from "./pages/AddNote";
import ViewNote from "./pages/ViewNote";
import NotFound from "./pages/NotFound";
import EditNote from "./pages/EditNote";
import { useAuth } from "./context/Auth";

function App() {
  const { isLoggedin } = useAuth();
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={isLoggedin ? <Home /> : <Navigate to="/login" />}
      />
      <Route
        path="/Home"
        element={isLoggedin ? <Home /> : <Navigate to="/login" />}
      />
      <Route
        path="/AddNote"
        element={isLoggedin ? <AddNote /> : <Navigate to="/login" />}
      />
      <Route
        path="/ViewNote/:id"
        element={isLoggedin ? <ViewNote /> : <Navigate to="/login" />}
      />
      <Route
        path="/EditNote/:id"
        element={isLoggedin ? <EditNote /> : <Navigate to="/login" />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
