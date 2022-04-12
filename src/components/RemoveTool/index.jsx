import React, { useState } from "react";
import Button from "@mui/material/Button";
import { VscDiffRemoved } from "react-icons/vsc";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useTool } from "../../contexts/ToolContext";

const RemoveTool = (props) => {
  const { removeToolById } = useTool();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const buttonStyle = {
    fontWeight: "700",
    color: "#000",
  };

  return (
    <div>
      <Button sx={buttonStyle} onClick={handleClickOpen}>
        <VscDiffRemoved />
        Remove
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{"Remove Tool"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to remove?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => removeToolById(props.id)} autoFocus>
            Yes, remove
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default RemoveTool;
