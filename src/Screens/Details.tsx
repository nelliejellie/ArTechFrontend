import React, { useState } from "react";
import { CardProps } from "../types/CardType";
import UseFetch from "../Networking/UseFetch";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Details = () => {
  const { id } = useParams();
  const { data, loading, error } = UseFetch<CardProps>(
    `http://localhost:8000/get-project/${id}`
  );

  return (
    <section className="bg-[#111229] h-[100vh] text-white">
      <Navbar />
      <div className="relative w-full h-[700px] ">
        <img
          className="w-full h-full object-cover"
          src={data?.image_url}
          alt={data?.title}
        />
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center text-white"></div>
      </div>
      <h1 className="font-bold text-2xl text-center mt-4">{data?.title}</h1>
      <div className="flex flex-row justify-center items-center pb-8 bg-[#111229]">
        <p className="text-center w-96">{data?.description}</p>
      </div>
    </section>
  );
};

export default Details;
