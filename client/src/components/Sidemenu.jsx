import React, { useEffect, useState } from "react";
import Grouplist from "./Grouplist";
import axios from 'axios';
import './sidemenu.css';

const Sidemenu = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/group/fetchAllGroup")
      .then((res) => { 
        console.log(res?.data?.allGroups);
        setList(res?.data?.allGroups);
      })
      .catch((error) => { 
        console.log(error);
      })
  }, []);

  return (
    <div
      style={{
        width: "15rem",
        padding: "1rem 1rem 1rem 2rem",
        textAlign: "center",
        overflowY: "hidden",
      }}
    >
      <h2 style={{ marginTop: "1.5rem" }}>Pocket Notes</h2>
      <div
        style={{
          height: `${86}vh`,
          overflowY: "scroll",
        }}
      >
        {list.map((item, index) => (
          <Grouplist key={index} name={item?.groupName} />
        ))}
      </div>
    </div>
  );
};

export default Sidemenu;
