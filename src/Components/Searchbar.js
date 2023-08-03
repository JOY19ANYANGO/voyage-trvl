import React, { useState } from "react";

function Searchbar({ onSearch }) {
  const [Location, setLocation] = useState("");

  function handleSearch(event) {
    setLocation(event.target.value);
    // Pass the entered description back to the parent component
    console.log(Location)
    onSearch(event.target.value);
    console.log(event.target.value)
  }

  return (
    <form>
    <input
      type="text"
      placeholder="search Location"
      value={Location}
      onChange={handleSearch}
    />
    <i className="fa fa-search"></i>
    </form>
  );
}

export default Searchbar;