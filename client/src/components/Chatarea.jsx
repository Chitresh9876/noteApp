import { Avatar, Stack } from '@mui/material';
import React, { useState } from 'react';
import bgImg from '../assets/bgImg.png';
import LockIcon from "@mui/icons-material/Lock";
import { deepOrange, deepPurple } from "@mui/material/colors";

const Chatarea = () => {
  const [activeUserData, setActiveUserData] = useState([1]);
  const name = "Chitresh";
  return (
    <div style={{ background: "#DAE5F5", width: "100vw", height: "100vh" }}>
      {activeUserData.length == 0 ? (
        <>
          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            sx={{ height: "100vh" }}
          >
            <div style={{ textAlign: "center" }}>
              <img src={bgImg} alt="bgImg" />
              <p
                style={{
                  fontSize: "50px",
                  fontWeight: "700",
                  marginBottom: "1rem",
                  marginTop: "1rem",
                }}
              >
                Pocket Notes
              </p>
              <p style={{ marginBottom: "0" }}>
                Send and receive messages without keeping your phone online.
              </p>
              <p>
                Use Pocket Notes on up to 4 linked devices and 1 mobile phone
              </p>
            </div>
            <Stack
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <LockIcon />
              <p>end-to-end encrypted</p>
            </Stack>
          </Stack>
        </>
      ) : (
        <>
          <header style={{marginBottom:"1rem", position:"static"}}>
            <Stack
              direction={"row"}
              justifyContent={"start"}
              alignItems={"center"}
              gap={2}
              px={2}
              sx={{ "&:hover": { cursor: "pointer" }, background: "#001F8B" }}
            >
              <Avatar sx={{ bgcolor: deepOrange[500] }}>
                {name.charAt(0).toUpperCase()}
              </Avatar>
              <p
                className=""
                style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#ffffff" }}
              >
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </p>
            </Stack>
            </header>
            
            
        </>
      )}
    </div>
  );
}

export default Chatarea;
