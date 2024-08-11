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

  const fetchAllGroup = async() => {
    await axios
      .get("http://localhost:5000/group/fetchAllGroup")
      .then((res) => {
        setList((pre) => {
          let updatedValue = { ...pre };
          updatedValue = res?.data?.allGroups;
          return updatedValue;
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    fetchAllGroup();
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
      }}
    >
      <h2 style={{ marginTop: "1.5rem" }}>Pocket Notes</h2>
      <div
      >
        <div
          style={{
            height: `${88}vh`,
            overflowY: "scroll",
            width: "100%",
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
              bgcolor: "#16008B",
            }}
          >
            <AddIcon />
          </Avatar>
        </div>
      </div>
      <Popup open={open} setOpen={setOpen} fetchAllGroup={fetchAllGroup} />
    </div>
  );
};

export default Sidemenu;
