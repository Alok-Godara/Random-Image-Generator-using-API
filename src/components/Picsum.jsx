import React, { useEffect, useState } from "react";

const Picsum = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    const randomImages = Array.from({ length: 7 }, (_, i) => ({
      id: i,
      url: `https://picsum.photos/200/300?random=${Math.random()}`
    }));
    setData(randomImages);
  };

  useEffect(() => {
    getData()
  }, [])
  

  return (
    <div className="h-72 m-5 bg-white flex flex-col justify-between items-center p-4 rounded overflow-hidden">
      <div className="flex gap-6 overflow-x-auto w-full py-2 px-1 scrollbar-hide justify-between">
        {data.map((elem) => (
          <img
            key={elem.id}
            src={elem.url}
            alt={`Random ${elem.id}`}
            className="w-52 object-cover rounded-xl"
          />
        ))}
      </div>

      <button
        onClick={getData}
        className="bg-emerald-700 text-white text-xl px-6 py-2 mt-2 rounded font-semibold hover:bg-emerald-800 active:bg-emerald-900 transition-all"
      >
        Refresh
      </button>
    </div>
  );
};

export default Picsum;
