import React, { useState } from "react";
import ButtonAdd from "../ButtonAdd";
import Tool from "../Tool";
import Search from "../Search";
import Tittle from "../TittlePage";
import "./style.css";
import { useTool } from "../../contexts/ToolContext";

const HomePage = () => {

  const {toolData} = useTool();

  return (
    <>
      <div className="container">
        <Tittle />
        <div className="card-actions">
          <Search />
          <ButtonAdd />
        </div>
        <ul>
          {toolData.map((tool, index) => (
            <li key={index}>
              <Tool
                id={tool.id}
                name={tool.name}
                link={tool.link}
                description={tool.description}
                tags={tool.tags}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default HomePage;
