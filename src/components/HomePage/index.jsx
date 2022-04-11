import React, { useState } from "react";
import ButtonAdd from "../ButtonAdd";
import Tool from "../Tool";
import Search from "../Search";
import Tittle from "../TittlePage";
import "./style.css";

const HomePage = () => {
  const [tool, setTool] = useState([
    {
      name: "Notion",
      link: "https://www.notion.so/",
      description:
        "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized.",
      tags: "#notes #organization #planning #collaboration #writting",
    },
    {
      name: "React",
      link:"",
      description:
        "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized.",
      tagsCard: "#notes #organization #planning #collaboration #writting",
    },
    {
      name: "Vue",
      link:"", 
      description:
        "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized.",
      tags: "#notes #organization #planning #collaboration #writting",
    },
  ]);

  const addNewTool = (newTool) =>{
    setTool([...tool, newTool])
  }

  return (
    <>
      <div className="container">
        <Tittle title="VUTTR" subtitle="Very Useful Tools to Remember" />
        <div className="card-actions">
          <Search />
          <ButtonAdd />
        </div>
        <ul>
          {tool.map((tool, index) => (
            <li key={index}>
              <Tool
                name={tool.name}
                link={tool.link}
                description={tool.description}
                tags={tool.tags}
              />
            </li>
          ))}
          <ButtonAdd addNewTool = {addNewTool}/>
        </ul>
      </div>
    </>
  );
};

export default HomePage;
