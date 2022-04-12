import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useTool } from "../../contexts/ToolContext";
import { MdSearch } from "react-icons/md";

const boxStyle = {
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  fontWeight: "600",
};

const Search = () => {
  const { searchTool } = useTool();

  const [search, setSearch] = useState("");
  searchTool(search);

  return (
    <Box sx={boxStyle}>
      <TextField
        size="small"
        variant="outlined"
        label={<MdSearch />}
        sx={{ background: "#fff", border: "3px solid #000" }}
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      <FormControlLabel
        value="search"
        control={<Checkbox />}
        label="search in tags only"
      />
    </Box>
  );
};

export default Search;
