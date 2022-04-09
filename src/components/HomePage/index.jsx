import React, { useState } from "react";
import ButtonAdd from "../ButtonAdd";
import Notes from "../Notes";
import Search from "../Search";
import Title from "../TittlePage";
import "./style.css";
import { Button } from "@mui/material";

const HomePage = () => {
  const [notes, setNotes] = useState([
    {
      nameCard: "Notion",
      descriptionCard:
        "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized.",
      tagsCard: "#notes #organization #planning #collaboration #writting",
    },
    {
      nameCard: "React",
      descriptionCard:
        "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized.",
      tagsCard: "#notes #organization #planning #collaboration #writting",
    },
    {
      nameCard: "Vue",
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
          {
            /* <ButtonAdd />*/
          }
        <Button variant="contained" color="success">Add Tool</Button>
        </div>
          {notes.map((notes) => (
            <Notes
              nameCard={notes.nameCard}
              descriptionCard={notes.descriptionCard}
              tagsCard={notes.tagsCard}
            />
          ))}
      </div>
    </>
  );
};

export default HomePage;
