import { Avatar, Box, Paper, Stack, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import bgImg from "../assets/bgImg.png";
import LockIcon from "@mui/icons-material/Lock";
import { deepOrange, deepPurple } from "@mui/material/colors";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
import { ActiveUserContext } from "../context/activeuser";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: "60px",
}));

const Chatarea = () => {
  const [note, setNote] = useState("");
  const [savedNote, setSavedNotes] = useState([]);
  const { activeUserData } = useContext(ActiveUserContext);

  useEffect(() => {
    const user = activeUserData?._id !== null;
    if (user) {
      fetchNotes();
    }
  }, [activeUserData]);

  const fetchNotes = async () => {
    setSavedNotes([]);
    await axios.get(`http://localhost:5000/notes/fetchAllNotes/${activeUserData?._id}`)
      .then((res) => {
        const data = res?.data?.result;
        const content = [];
        for (var i = 0; i < data.length; i++) {
          content[i] = data[i]?.content;
        }
        setSavedNotes([...content]);
      })
      .catch((error) => {
        console.log(error?.message);
      })
  }

  const handleUpdateNote = async () => {
    note && await axios
      .post("http://localhost:5000/notes/create", {
        content: note,
        groupId: activeUserData?._id,
      })
      .then((res) => {
        setSavedNotes([]);
        setNote("");
        fetchNotes();
        
      })
      .catch((error) => {
        console.log(error?.message);
      });
  };
  const name = "Chitresh";
  return (
    <div
      style={{
        background: "#DAE5F5",
        width: "100vw",
        height: "100vh",
        position: "relative",
      }}
    >
      {activeUserData?._id === null ? (
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
          <header style={{ marginBottom: "0rem", position: "static" }}>
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
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  color: "#ffffff",
                }}
              >
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </p>
            </Stack>
          </header>

          <Box
            sx={{
                padding: "1rem 1rem",
                overflowY: "scroll",
              height:"69%"
            }}
            >
              {
                savedNote.map((note, index) => {
                  return (
                    <Item
                      elevation={4}
                      key={index}
                      sx={{
                        padding: "0.5rem 1rem",
                        marginBottom: "0.5rem",
                        height: "auto",
                        lineHeight: "1.5rem",
                        textAlign: "start",
                      }}
                    >
                      {note}
                    </Item>
                  );
                })
              }
            
          </Box>

          <Box
            className="container"
            sx={{
              height: "10rem",
              width: "100%",
              position: "absolute",
              bottom: "0",
              background: "#001F8B",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextField
              multiline
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={5}
              sx={{
                background: "#fff",
                width: "95%",
                height: "9.1rem",
                borderRadius: "0.5rem",
                position: "relative",
              }}
              variant="outlined"
            />
            <SendIcon
              sx={{
                // background: "#001F8B",
                color : "#001F8B",
                position: "absolute",
                bottom: "1rem",
                right: "3rem",
                width: "2rem",
                height: "2rem",
              }}
              onClick={handleUpdateNote}
            />
          </Box>
        </>
      )}
    </div>
  );
};

export default Chatarea;
