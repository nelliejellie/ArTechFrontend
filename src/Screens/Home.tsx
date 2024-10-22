import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Card from "../Components/Card";
import UseFetch from "../Networking/UseFetch";
import { CardProps } from "../types/CardType";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Details from "../Screens/Details";

function Home() {
  const { data, loading, error } = UseFetch<CardProps[]>(
    "https://arctechfastapi-1.onrender.com/projects"
  );

  if (loading) return <div>Loading...</div>;
  return (
    <div className="App bg-[#111229] h-[100vh] w-full">
      <Navbar />
      <h1 className="font-bold text-2xl text-white p-4">View Our Projects</h1>
      <div className="flex flex-row justify-around items-center mt-8">
        {data &&
          data.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              image_url={item.image_url}
              projectUrl={item.projectUrl}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
