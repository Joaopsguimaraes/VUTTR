import React from "react";
import { useState } from "react";
import { Button, Box, Typography, Modal, TextField } from "@mui/material";
import { FiPlus } from "react-icons/fi";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
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
  padding: "0 10px",
  color: "#000",
  background: "#fff",
  border: "3px solid #000",
  boxShadow: "15",
};

const ButtonAdd = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [nameTool, setNameTool] = useState();
  const [linkTool, setLinkTool] = useState();
  const [descriptionTool, setDescriptionTool] = useState();
  const [tagsTool, setTagsTool] = useState();

  function newNameTool(event) {
    event.stopPropagation();
    setNameTool(event.target.value);
  }
  function newLinkTool(event) {
    event.stopPropagation();
    setLinkTool(event.target.value);
  }
  function newDescriptionTool(event) {
    event.stopPropagation();
    setDescriptionTool(event.target.value);
  }
  function newTagsTool(event) {
    event.stopPropagation();
    setTagsTool(event.target.value);
  }
  function createTool(event) {
    event.preventDefault();
    event.stopPropagation();
    window.alert(
      `Titulo da nota: ${nameTool}, link: ${linkTool}, descricao: ${descriptionTool} tags: ${tagsTool}`
    );
  }

  return (
    <div>
      <Button sx={buttonAddStyle} onClick={handleOpen}>
        <FiPlus />
        Add
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style} component="form" onSubmit={createTool}>
          <Typography variant="h6" component="h2">
            <FiPlus />
            Add new tool
          </Typography>
          <Typography variant="subtitle1">
            Tool Name
            <TextField sx={textFieldStyle} onChange={newNameTool} />
          </Typography>
          <Typography variant="subtitle1" component="div">
            Tool link
            <TextField sx={textFieldStyle} onChange={newLinkTool} />
          </Typography>
          <Typography variant="subtitle1" component="div">
            Tool description
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
            <TextField sx={textFieldStyle} onChange={newTagsTool} />
          </Typography>
          <Button sx={buttonAddStyle} type="submit">
            Add Tool
          </Button>
        </Box>
      </Modal>
    </div>
  );
};
export default ButtonAdd;
