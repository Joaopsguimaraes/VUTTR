import React, { useState } from "react";
import ButtonAdd from "../ButtonAdd";
import Notes from "../Notes";
import Search from "../Search";
import Title from "../TittlePage";
import "./style.css";

const HomePage = () => {
  const [notes, setNotes] = useState([
    {
      nameCard: "Notion",
      link: "https://www.notion.so/",
      descriptionCard:
        "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized.",
      tagsCard: "#notes #organization #planning #collaboration #writting",
    },
    {
      nameCard: "React",
      link:"",
      descriptionCard:
        "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized.",
      tagsCard: "#notes #organization #planning #collaboration #writting",
    },
    {
      nameCard: "Vue",
      link:"", 
      descriptionCard:
        "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized.",
      tagsCard: "#notes #organization #planning #collaboration #writting",
    },
  ]);
  return (
    <>
      <div className="container">
        <Title title="VUTTR" subtitle="Very Useful Tools to Remember" />
        <div className="card-actions">
          <Search />
          <ButtonAdd />
        </div>
        <ul>
          {notes.map((notes, index) => (
            <li key={index}>
              <Notes
                nameCard={notes.nameCard}
                descriptionCard={notes.descriptionCard}
                tagsCard={notes.tagsCard}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default HomePage;
