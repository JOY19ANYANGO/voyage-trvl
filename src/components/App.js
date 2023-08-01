import React ,{ useEffect, useState } from 'react'

import Areas from './Areas';

function App() {
const[areas ,setAreas]=useState([])
useEffect(() => {
  fetch(' http://localhost:8001/areas')
    .then((r) => r.json())
    .then((data) => setAreas(data));
}, []);

  return (
    <>
    <Areas areas={areas}/>
    </>
  )
}

export default App
