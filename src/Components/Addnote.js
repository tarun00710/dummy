import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNoteContext } from "../Context/NoteContext";

const Addnote = () => {
  const {state,dispatch} = useNoteContext()
  const [noteDetail,setNoteDetail] = useState({
    title:"",
    description:"",
    completed:false,
    favorite:false
  })
  const setInputHandler = (e) => {
      const {name,value} =  e.target;
      if(name === "note_title")
        setNoteDetail({...noteDetail,title:value})
      else  
      setNoteDetail({...noteDetail,description:value})
  }

  return (
    <div>
      <p>Addnote</p>
      <div><p>Note preview here...</p></div>
  
      <div className="note_card card_container">
          <h4>Title : {noteDetail.title}</h4>
          <p>Description : {noteDetail.description}</p>
      </div>
      <form>
        <div><input onChange={(e) => setInputHandler(e)} value={noteDetail.title} name="note_title" type="text" placeholder="Note title" /></div>
        <div><input onChange={(e) => setInputHandler(e)} value={noteDetail.description} name="note_description" type="text" placeholder="write a note" /></div>
      </form>
      <button  onClick={()  => dispatch({type:"ADD_NOTE",payload:noteDetail})} className="btn">Save note</button>
      <div>
        <Link to={"/shownote"}>
          <button className="btn">Show notes</button>
        </Link>
        <Link to={"/finishednote"}>
          <button className="btn">Completed Notes</button>
        </Link>
        <Link to={"/favnote"}>
          <button className="btn">Favorite notes</button>
        </Link>
      </div>
    </div>
  );
};

export default Addnote;
