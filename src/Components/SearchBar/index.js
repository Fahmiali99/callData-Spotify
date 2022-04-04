import React from "react";

const SearchBar = ({ submit, change }) => {
  return (
    <form onSubmit={submit}>
      <div className="mt-2 mb-2 w-100">
        <button className=""></button>
        <input
          className="p-2 col-md-5 col-12 rounded-3"
          type="text"
          placeholder="Search for artist or songs"
          onChange={change}
        />
      </div>
      <hr></hr>
    </form>
  );
};

export default SearchBar;
