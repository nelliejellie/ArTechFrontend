import React from "react";
import { CardProps } from "../types/CardType";
import { Routes, Route, Link } from "react-router-dom";

const Card: React.FC<CardProps> = (props: CardProps) => {
  return (
    <div className="w-[20%] rounded overflow-hidden shadow-lg bg-white transition-transform duration-300 transform hover:scale-105">
      <img className="w-full h-80" src={props.image_url} alt={props.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.title}</div>
        <p className="text-gray-700 text-base">{props.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <div className="bg-[#273577] text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
          <Link to={`/Details/${props.id}`}>View Project</Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
