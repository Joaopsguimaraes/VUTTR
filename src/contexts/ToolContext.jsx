import React, { useContext, useState, createContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const ToolContext = createContext({});

const ToolProvider = ({ children }) => {
  const dataStorage = localStorage.getItem("toolData");
  const initialData = dataStorage ? JSON.parse(dataStorage) : [];
  const [toolData, setToolData] = useState(initialData);

  const addNewTool = (newTool) => {
    newTool.id = uuidv4();
    const newToolData = [...toolData, newTool];
    setToolData(newToolData);
    localStorage.setItem("toolData", JSON.stringify(newToolData));
  };

  const removeToolById = (id) => {
    const tools = toolData.filter((tool) => {
      return tool.id != id;
    });
    setToolData([...tools]);
    localStorage.setItem("toolData", JSON.stringify(tools));
  };

  const searchTool = (name) => {
    const dataFilter = toolData.filter((tool) => {
      return tool.name.includes(name);
    });
    console.log(dataFilter);
  };

  useEffect(() => {
    console.log("render");
  });

  const valueData = {
    toolData,
    addNewTool,
    removeToolById,
    searchTool,
  };

  return (
    <ToolContext.Provider value={valueData}>{children}</ToolContext.Provider>
  );
};

function useTool() {
  const context = useContext(ToolContext);

  if (!context) {
    throw new Error("useContext must be used in ToolProvider");
  }

  return context;
}

export { ToolContext, ToolProvider, useTool };
