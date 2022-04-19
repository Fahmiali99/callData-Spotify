import React from "react";

type Props = {
  submit: (e: React.FormEvent<HTMLFormElement>) => void;
  change: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar = ({ submit, change }: Props) => {
  return (
    <form onSubmit={submit}>
      <div className=" mb-4 w-100 p-2">
        {/* <button className=""></button> */}
        <input
          className="p-2 col-md-5 col-12 rounded-3 "
          type="text"
          placeholder="Search for artist or songs"
          onChange={change}
        />
      </div>
      <hr className="m-2"></hr>
    </form>
  );
};

export default SearchBar;
