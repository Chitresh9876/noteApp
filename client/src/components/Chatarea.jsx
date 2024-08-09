import { Stack } from '@mui/material';
import React, { useState } from 'react';
import bgImg from '../assets/bgImg.png';
import LockIcon from "@mui/icons-material/Lock";

const Chatarea = () => {
  const [activeUserData, setActiveUserData] = useState([]);
  return (
    <div style={{ background: "#DAE5F5", width: "100vw", height: "100vh" }}>
      {activeUserData.length == 0 ? (
        <>
          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            sx={{ height: "100vh"}}
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
            <Stack direction={"row"} justifyContent={"center"} alignItems={"center"}>
              <LockIcon />
              <p>end-to-end encrypted</p>
            </Stack>
          </Stack>
        </>
      ) : (
        <>chat</>
      )}
    </div>
  );
}

export default Chatarea;
