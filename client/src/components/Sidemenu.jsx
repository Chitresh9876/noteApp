import React, { useState } from 'react'
import Grouplist from './Grouplist';

const Sidemenu = () => {
  const [list, setList] = useState([]);

  return (
    <div style={{width: "15rem", padding:"2rem 2rem", textAlign:"center"}}>
      <h2>Pocket Notes</h2>
      <Grouplist/>
      
    </div>
  )
}

export default Sidemenu;
