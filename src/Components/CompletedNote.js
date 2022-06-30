import React from "react";
import { useNoteContext } from "../Context/NoteContext";

const CompletedNote = () => {
  const { state } = useNoteContext();

  const filterCompleted = state.filter((note) => note.completed === true)
    return filterCompleted.map((note) => 
    <div className="note_card card_container">
        <h4>Title : {note.title}</h4>
        <p>Description : {note.description}</p>
      </div>
    )

  };


export default CompletedNote;
