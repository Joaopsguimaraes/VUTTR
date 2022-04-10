import React from "react";
import { Button, Box, Typography, Modal, TextField } from "@mui/material";
import { FiPlus } from "react-icons/fi";

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

const textFieldStyle = {
  width: "100%",
  padding: 0,
  border: "2px solid #000",
};

const buttonAddStyle = {
  padding: "0 20px",
  color: "#000",
  background: "#fff",
  border: "3px solid #000",
  boxShadow: "15"
};


const ButtonAdd = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const newNameTool = (nameTool) => {
    console.log(nameTool.target.value);
  };
  const newLinkTool = (linkTool) => {
    console.log(linkTool.target.value);
  };
  const newDescriptionTool = (descriptionTool) => {
    console.log(descriptionTool.target.value);
  };
  const newTagsTool = (tagsTool) => {
    console.log(tagsTool.target.value);
  };

  return (
    <div>
      <Button sx={buttonAddStyle} onClick={handleOpen}>
        <FiPlus />
        Add
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
            <TextField sx={textFieldStyle} onChange={newNameTool} />
          </Typography>
          <Typography variant="subtitle1" component="div">
            Tool link
            <br />
            <TextField sx={textFieldStyle} onChange={newLinkTool} />
          </Typography>
          <Typography variant="subtitle1" component="div">
            Tool description
            <br />
            <TextField
              sx={textFieldStyle}
              id="outlined-textarea"
              multiline
              rows={4}
              onChange={newDescriptionTool}
            />
          </Typography>
          <Typography variant="subtitle1" component="div">
            Tool Tags
            <br />
            <TextField sx={textFieldStyle} onChange={newTagsTool} />
          </Typography>
          <br />
            <Button sx={buttonAddStyle}>Add Tool</Button>
        </Box>
      </Modal>
    </div>
  );
};
export default ButtonAdd;
