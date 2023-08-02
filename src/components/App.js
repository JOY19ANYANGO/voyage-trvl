import React ,{ useEffect, useState } from 'react'

import Areas from './Areas';
import Searchbar from './Searchbar';

function App() {
const[areas ,setAreas]=useState([])
useEffect(() => {
  fetch(' http://localhost:8001/areas')
    .then((r) => r.json())
    .then((data) => {setAreas(data)
    console.log(data)});
}, []);
//Filter bots based on the entered class
const handleSearch = (Location) => {
  if (Location === "" || Location === null) {
    // Reset the areas state to its original value (data fetched initially)
    fetch("http://localhost:8001/areas")
      .then((r) => r.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setAreas(data);
      });
  } else {
    // Filter areas based on the entered Location
    const filtered = areas.filter((area) => area.Location.toLowerCase().includes(Location.toLowerCase()));
    setAreas(filtered);
    console.log(filtered);
  }
};


  return (
    <>
    <Searchbar onSearch={handleSearch}/>
    <Areas areas={areas}/>
    </>
  )
}

export default App
