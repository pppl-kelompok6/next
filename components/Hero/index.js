import React from "react";

export default function Hero() {
  return (
    <div
      className="bg-yellow-600 h-screen flex flex-col
        justify-center items-center"
    >
      <h1
        className=" flex font-serif text-6xl text-white 
      text-center font-semibold"
      >
        Growing with Community
      </h1>
      <br></br>
      <br></br>
      <div className="mb-5">
        <button className="transition duration-500 ease-in-out bg-yellow-200 hover:bg-yellow-300 
        text-black font-bold py-3 px-6 rounded transform hover:-translate-y-1 hover:scale-110">
          Daftar Event
        </button>
      </div>
    </div>
  );
}
