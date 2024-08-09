import React, { useContext } from "react";
import Avatar from "@mui/material/Avatar";
import { deepOrange, deepPurple } from "@mui/material/colors";
import { Stack } from "@mui/material";
import { ActiveUserContext } from "../context/activeuser";

const Grouplist = ({ groupName, _id, color }) => {
  const { activeUserData, updateValue } = useContext(ActiveUserContext);
  // const handleList = () => {
  //   console.log("clicked");
  // };
  console.log(activeUserData);
  return (
    <Stack
      direction={"row"}
      justifyContent={"start"}
      alignItems={"center"}
      gap={2}
      px={2}
      onClick={() => updateValue({ groupName, _id, color })}
      sx={{ "&:hover": { cursor: "pointer" } }}
    >
      <Avatar sx={{ bgcolor: deepOrange[500] }}>
        {groupName.charAt(0).toUpperCase()}
      </Avatar>
      <p className="" style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
        {groupName.charAt(0).toUpperCase() + groupName.slice(1)}
      </p>
    </Stack>
  );
};

export default Grouplist;
