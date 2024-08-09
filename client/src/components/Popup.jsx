import React from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Stack,
  Button,
} from "@mui/material";
const Popup = ({ open, setOpen }) => {
  const colors = ["#32e", "#97e", "#986", "#123", "#6819"];
  const handleClose = () => setOpen(false);
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
            // border: "1px solid red",
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
              //   border: "1px solid red",
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
              />
            </label>
          </div>
          <Stack direction={"row"} justifyContent={"space-between"}>
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
                  ></Box>
                );
              })}
              <div
                style={{
                  filter: "drop-shadow(0 0 0.2rem #000)",
                  //   border: "1px solid black",
                  backgroundColor: "#fff",
                  height: "3rem",
                  width: "3rem",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "1.5rem",
                }}
              >
                +
              </div>
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
          >
            Create
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default Popup;
