import React from 'react'
import Avatar from "@mui/material/Avatar";
import { deepOrange, deepPurple } from "@mui/material/colors";
import { Stack } from '@mui/material';

const Grouplist = ({ name }) => {
    
    const handleList = () => {
        console.log("clicked");
    }

  return (
    <Stack
          direction={"row"}
          justifyContent={"start"}
          alignItems={"center"}
          gap={2}
          px={2}
          onClick={handleList}
          sx={{"&:hover":{cursor:"pointer"}}}
    >
      <Avatar sx={{ bgcolor: deepOrange[500] }}>
              {name.charAt(0).toUpperCase()}
          </Avatar>
      <p className="" style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </p>
    </Stack>
  );
}

export default Grouplist
