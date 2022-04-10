import React from "react";
import {
  Button,
  Box,
  Typography,
  Modal,
  TextField,
} from "@mui/material";
import { FiPlus } from "react-icons/fi";
import {HiPlus} from 'react-icons/hi'
import { fontWeight } from "@mui/system";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  bgcolor: "background.paper",
  border: "3px solid #000",
  boxShadow: 24,
  p: 4,
};

const buttonStyle = {
  background:'#fff',
  border: "3px solid #000",
  boxShadow: 10,
  color:'#000',
  fontWeight:600,
  padding:'0 20px'
}

const textFieldStyle = {
  width: "100%",
  padding: 0,
  border: "2px solid #000"
};

const ButtonAdd = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button sx={buttonStyle} onClick={handleOpen}>
      <HiPlus />Add
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2">
          <FiPlus />
            Add new tool
          </Typography>
          <br />
          <Typography variant="subtitle1">
            Tool Name
            <br />
            <TextField sx={textFieldStyle} />
          </Typography>
          <Typography variant="subtitle1" component="div">
            Tool link
            <br />
            <TextField sx={textFieldStyle} />
          </Typography>
          <Typography variant="subtitle1" component="div">
            Tool description
            <br />
            <TextField sx={textFieldStyle} />
          </Typography>
          <Typography variant="subtitle1" component="div">
            Tool Tags
            <br />
            <TextField sx={textFieldStyle} />
          </Typography>
          <br />
          <Button variant="contained" color="success">
            Add Tool
          </Button>
        </Box>
      </Modal>
    </div>
  );
};
export default ButtonAdd;
