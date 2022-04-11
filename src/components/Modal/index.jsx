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

const buttonAddTool = {
  width: "20%",
  padding: "0",
  color: "#000",
  background: "#fff",
  border: "3px solid #000",
  boxShadow: "15",
  alignSelf: "flex-end",
};

const Modal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [nameTool, setNameTool] = useState("");
  const [linkTool, setLinkTool] = useState("");
  const [descriptionTool, setDescriptionTool] = useState("");
  const [tagsTool, setTagsTool] = useState("");

  const newNameTool = (event) => {
    setNameTool(event.target.value);
  };
  const newLinkTool = (event) => {
    setLinkTool(event.target.value);
  };
  const newDescriptionTool = (event) => {
    setDescriptionTool(event.target.value);
  };
  const newTagsTool = (event) => {
    setTagsTool(event.target.value);
  };

  const createTool = (event) => {
    props.addNewTool({
      nameCard: nameTool,
      link: linkTool,
      descriptionCard: descriptionTool,
      tagsCard: tagsTool,
    });
    event.preventDefault();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style} component="form" onSubmit={createTool}>
        <Typography variant="h6" component="h2">
          <FiPlus />
          Add new tool
        </Typography>
        <Typography variant="subtitle1">Tool Name</Typography>
        <TextField
          sx={textFieldStyle}
          value={nameTool}
          onChange={newNameTool}
        />
        <Typography variant="subtitle1" component="div">
          Tool link
        </Typography>
        <TextField
          sx={textFieldStyle}
          value={linkTool}
          onChange={newLinkTool}
        />
        <Typography variant="subtitle1" component="div">
          Tool description
        </Typography>
        <TextField
          sx={textFieldStyle}
          id="outlined-textarea"
          multiline
          rows={4}
          value={descriptionTool}
          onChange={newDescriptionTool}
        />
        <Typography variant="subtitle1" component="div">
          Tool Tags
        </Typography>
        <TextField
          sx={textFieldStyle}
          value={tagsTool}
          onChange={newTagsTool}
        />
        <Button sx={buttonAddTool} type="submit">
          Add Tool
        </Button>
      </Box>
    </Modal>
  );
};

export default Modal;