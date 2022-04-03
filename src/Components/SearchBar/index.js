import React from "react";

const SearchBar = ({ submit, change }) => {
  return (
    <form onSubmit={submit}>
      <div className="">
        <button className=""></button>
        <input
          type="text"
          placeholder="Search for artist or songs"
          className=" "
          onChange={change}
        />
      </div>
    </form>
  );
};

export default SearchBar;
