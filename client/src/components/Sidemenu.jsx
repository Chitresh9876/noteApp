import React, { useEffect, useState } from "react";
import Grouplist from "./Grouplist";
import axios from 'axios';
import './sidemenu.css';
import Avatar from "@mui/material/Avatar";
import AddIcon from "@mui/icons-material/Add";


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
        width: "17rem",
        padding: "1rem 0rem 1rem 2rem",
        textAlign: "center",
        overflowY: "hidden",
      }}
    >
      <h2 style={{ marginTop: "1.5rem" }}>Pocket Notes</h2>
      <div
        style={{
          height: `${86}vh`,
          overflowY: "scroll",
          // position:"absolute"
        }}
      >
        {list.map((item, index) => (
          <Grouplist key={index} name={item?.groupName} />
        ))}
        <Avatar
          sx={{
            bgcolor: "#16008B",
            top: "27rem",
            left: "10rem",
            position: "relative",
          }}
        >
          <AddIcon />
        </Avatar>
      </div>
    </div>
  );
};

export default Sidemenu;
