import React from "react";
import "./Search.scss"

const Search = ({ handleSubmit, handleChange, inputRef, query }) => {
  return (
    
      <div className="input-wrapper">
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Search..."
            ref={inputRef}
            value={query}
          />
          <input className="submit" type="submit" value="Search" />
        </form>
      </div>
    
  );
};

export default Search;
