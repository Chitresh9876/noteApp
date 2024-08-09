import React, { useEffect, useState } from "react";
import Grouplist from "./Grouplist";
import axios from "axios";
import "./sidemenu.css";
import Avatar from "@mui/material/Avatar";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import Popup from "./Popup";

const Sidemenu = () => {
  const [list, setList] = useState([]);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:5000/group/fetchAllGroup")
      .then((res) => {
        console.log(res?.data?.allGroups);
        // res?.data?.allGroups
        setList((pre) => {
          let updatedValue = { ...pre };
          updatedValue = res?.data?.allGroups;
          return updatedValue;
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div
      style={{
        width: "27rem",
        height: "100vh",
        padding: "1rem 0rem 1rem 2rem",
        textAlign: "center",
        overflowY: "hidden",
        position: "relative",
        // border: "1px solid red",
      }}
    >
      <h2 style={{ marginTop: "1.5rem" }}>Pocket Notes</h2>
      <div
      // sx={{  width: "100%", border: "1px solid red" }}
      >
        <div
          style={{
            height: `${86}vh`,
            overflowY: "scroll",
            width: "100%",

            // position:"absolute"
          }}
        >
          {list.map((item, index) => (
            <Grouplist
              key={index}
              groupName={item?.groupName}
              _id={item?._id}
              color={item?.color}
            />
          ))}
        </div>
        <div
          style={{
            width: "100%",
            position: "absolute",
            left: "-1.3rem",
            bottom: "4rem",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Avatar
            onClick={() => setOpen(true)}
            sx={{
              // border: "1px solid black",
              bgcolor: "#16008B",
              // top: "27rem",
              // left: "10rem",
              // bottom: "3rem",
              // left: ".9rem",
              // position: "relative",
            }}
          >
            <AddIcon />
          </Avatar>
        </div>
      </div>
      <Popup open={open} setOpen={setOpen} />
    </div>
  );
};

export default Sidemenu;
