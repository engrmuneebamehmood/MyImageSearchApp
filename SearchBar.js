import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label><b>Welcome to Image Search App :</b></label>
        <input
          value={term}
          onChange={handleChange}
          placeholder="Search and Press Enter ..."
        />
 
      </form>
    </div>
  );
}

export default SearchBar;
