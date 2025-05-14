import React from "react";
import axios from "axios";

const Picsum = () => {

    const getData = async () => {
        const response = await axios.get('https://picsum.photos/id/237/200/300')
        console.log(response)
    }

  return (
    <div className="h-64 m-5 bg-white flex flex-col justify-between items-center p-4 rounded">

      <div>

      </div>

      <button onClick={getData} className="bg-emerald-700 text-white text-xl px-6 py-2 mt-2 rounded font-semibold hover:bg-emerald-800 active:bg-emerald-900 transition-all">
        Refresh
      </button>
    </div>
  );
};

export default Picsum;
