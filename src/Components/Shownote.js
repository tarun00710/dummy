import React from "react";
import { useNavigate } from "react-router-dom";
import { useNoteContext } from "../Context/NoteContext";

const Shownote = () => {
  const { state,dispatch } = useNoteContext();
  const navigate = useNavigate()
  return (
    <>
    <div className="card_container">
      {state?.map((note,i) => {
        return <div className="note_card">
         
          <h4>Title : {note.title}</h4>
          <p>Description : {note.description}</p>
          <button onClick={() => dispatch({type:"ADD_TO_FAV",payload:i})} className="btn btn_regular">Like</button>
          <button onClick={() => dispatch({type:"COMPLETED_NOTE",payload:i})} className="btn btn_green">Mark as Completed</button>
          <button onClick={() => dispatch({type:"DELETE_NOTE",payload:i})} className="btn btn_red">Delete</button>
        </div>
      })}
      {/* {state[0].title} */}
      </div>
      <button onClick={()=>navigate("/")}>Home</button>
    </>
  
  );
};

export default Shownote;
