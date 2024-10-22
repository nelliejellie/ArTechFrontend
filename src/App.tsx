import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import UseFetch from "./Networking/UseFetch";
import { CardProps } from "./types/CardType";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Details from "./Screens/Details";
import Home from "./Screens/Home";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/details/:id",
    element: <Details />,
  },
]);

function App() {
  const { data, loading, error } = UseFetch<CardProps[]>(
    "http://localhost:8000/projects"
  );

  if (loading) return <div>Loading...</div>;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Details/:id" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
