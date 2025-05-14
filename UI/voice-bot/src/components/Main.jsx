import React, { useState } from "react";

const Main = () => {
  const [username, setUsername] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(username + " submitted");
    setUsername("");
  };

  return (
    <div className="flex items-center justify-center m-20">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="bg-gray-100 p-8 rounded-lg shadow-lg"
      >
        <input
          className="border p-4 text-lg mr-4"
          type="text"
          placeholder="Enter your name"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          value={username}
        />
        <button
          className="bg-blue-500 text-white px-6 py-3 text-xl rounded-lg 
          hover:bg-blue-600 active:bg-blue-700 transition-all"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Main;
