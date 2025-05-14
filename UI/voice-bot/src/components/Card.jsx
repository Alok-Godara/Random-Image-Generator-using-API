import React from "react";

const Card = (props) => {
  return (
    <div className="bg-white w-50 h-[270px] p-4 text-center rounded-2xl shadow flex-shrink-0">
      <img
        className="h-24 w-24 rounded-full mx-auto mb-2"
        src={props.profilePhoto}
        alt={props.name}
      />
      <h1 className="font-bold text-xl">{props.name}</h1>
      <h2 className="text-sm text-blue-500">{props.profession}</h2>
      <h2 className="text-sm text-gray-600">
        {props.age}, {props.city}
      </h2>
      <button className="bg-emerald-700 text-white text-sm px-4 py-1.5 mt-2 rounded font-medium hover:bg-emerald-800 active:bg-emerald-900 transition-all">
        Add Friend
      </button>
    </div>
  );
};

export default Card;
