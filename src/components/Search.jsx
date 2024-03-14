import React, { useEffect, useState } from "react";
import searchImage from "../assets/search_image.jpg";
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleInput = (e) =>{
    setInput(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(input.length > 0){
    navigate(`/mealsbysearch/${input}`);}
    setInput("");
  };
   
  return (
    <div
      className="h-[400px] flex-col  "
      style={{ backgroundImage: `url(${searchImage})` }}
    >
      <div className="text-center ">
        <form
          className="join w-[400px] mt-[150px] border border-black text-black"
          onSubmit={handleSubmit}
        >
            <div className="w-3/4">
              <input
                className="input w-full input-bordered join-item bg-white"
                placeholder="Search"
                value={input}
                onChange={handleInput}
              />
            </div>
          <div className="indicator  ">
            {/* <span className="indicator-item badge badge-secondary">new</span> */}
            <button className="btn join-item text-white font-semibold bg-orange-600" type="submit">
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="text-white my-4 text-center">
            <h2>What Is Your Favorite Food?</h2>
      </div>
    </div>
  );
};

export default Search;
