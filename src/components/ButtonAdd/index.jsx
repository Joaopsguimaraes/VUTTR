import React from "react";
import { useState } from "react";
import { Button, Box, Typography, Modal, TextField } from "@mui/material";
import { FiPlus } from "react-icons/fi";
import { useTool } from "../../contexts/ToolContext";

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
const buttonAddTool = {
  width: "20%",
  padding: "0",
  color: "#000",
  background: "#fff",
  border: "3px solid #000",
  boxShadow: "15",
  alignSelf: "flex-end",
};

const ButtonAdd = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const [nameTool, setNameTool] = useState("");
  const [linkTool, setLinkTool] = useState("");
  const [descriptionTool, setDescriptionTool] = useState("");
  const [tagsTool, setTagsTool] = useState("");

  const { addNewTool } = useTool();

  const newNameTool = (event) => setNameTool(event.target.value);
  const newLinkTool = (event) => setLinkTool(event.target.value);
  const newDescriptionTool = (event) => setDescriptionTool(event.target.value);
  const newTagsTool = (event) => setTagsTool(event.target.value);

  const createTool = (event) => {
    addNewTool({
      name: nameTool,
      link: linkTool,
      description: descriptionTool,
      tags: tagsTool,
    });
    event.preventDefault();
    handleOpen();
    setNameTool("");
    setLinkTool("");
    setDescriptionTool("");
    setTagsTool("");
  };

  return (
    <div>
      <Button sx={buttonAddStyle} onClick={handleOpen}>
        <FiPlus />
        Add
      </Button>
      <Modal open={open} onClose={handleOpen}>
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
    </div>
  );
};
export default ButtonAdd;
