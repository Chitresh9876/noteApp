import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Stack,
  Button,
} from "@mui/material";
import axios from "axios";
const Popup = ({ open, setOpen, fetchAllGroup }) => {
  const colors = [
    "#B38BFA",
    "#FF79F2",
    "#43E6FC",
    "#F19576",
    "#0047FF",
    "#6691FF",
  ];

  const [color, setColor] = useState("");
  const [name, setName] = useState("");

  const handleClose = () => setOpen(false);

  const handleCreateGroup = async (e) => {
    e.preventDefault();
    if (name.length && color.length) {
      await axios
        .post("http://localhost:5000/group/create", {
          groupName: name,
          color,
        })
        .then((res) => {
          console.log(res?.data);
          fetchAllGroup();
          handleClose();
        })
        .catch((error) => {
          console.log(error?.message);
        });
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Box
        sx={{
          borderRadius: ".5rem",
          height: "50vh",
          width: "55vw",
          backgroundColor: "#fff",
          border: "none",
          padding: ".9rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "79%",
            height: "78%",
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
          gap={3.5}
        >
          <Typography variant="h5" fontWeight={"500"}>
            Create New Group
          </Typography>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <label
              htmlFor="outlined-search"
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              Group Name
              <TextField
                // fullWidth
                size="small"
                sx={{
                  width: "75%",
                  height: "",
                  borderRadius: "50%",
                  "& .MuiOutlinedInput-root": {
                    "&:Mui-focused": {
                      border: "none",
                      color: "green",
                    },
                  },
                }}
                id="outlined-search"
                label="Enter Group Name"
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
          <Stack
            direction={"row"}
            justifyContent={"start"}
            alignItems={"center"}
          >
            <Typography>Choose Color</Typography>
            <Stack
              direction={"row"}
              spacing={3}
              width={"75%"}
              justifyContent={"flex-end"}
            >
              {colors.map((item, ind) => {
                return (
                  <Box
                    key={ind}
                    sx={{
                      filter: `drop-shadow(0 0 0.2rem ${item})`,
                      backgroundColor: item,
                      height: "3rem",
                      width: "3rem",
                      borderRadius: "50%",
                      "& .MuiOutlinedInput-root": {
                        "&:hover fieldset": {
                          cursor: "pointer",
                          filter: `drop-shadow(0 0 0.5rem ${item})`,
                        },
                      },
                    }}
                    onClick={() => setColor(item)}
                  ></Box>
                );
              })}
            </Stack>
          </Stack>
          <Button
            variant="contained"
            sx={{
              position: "absolute",
              bottom: "3rem",
              right: ".1rem",
              bgcolor: "#19ee",
            }}
            onClick={handleCreateGroup}
          >
            Create
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default Popup;
