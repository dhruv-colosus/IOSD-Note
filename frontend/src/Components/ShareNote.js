import React, { useState, useEffect } from "react";
import "./ShareNote.css";
import { useParams } from "react-router-dom";
import dance from "../images/dance.gif";
import dance2 from "../images/fortnite-dance.gif";
import { useDispatch, useSelector } from "react-redux";
import { shareNoteAction } from "../actions/notesAction";

function ShareNote() {
  const [note, setNote] = useState();

  const [title, setTitle] = useState();
  const [category, setCategory] = useState();
  const [content, setContent] = useState();
  const id = useParams();
  const [date, setDate] = useState();

  const dispatch = useDispatch();

  const shareNote = useSelector((state) => state.shareNote);
  const { data } = shareNote;

  const [copied, setCopied] = useState(false);

  function copy() {
    const el = document.createElement("input");
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopied(true);
  }

  useEffect(() => {
    const fetching = async () => {
      // const { data } = await axios.get(
      //   `http://localhost:4000/api/notes/share/${id.id}`
      // );

      await dispatch(shareNoteAction(id.id));

      setNote(data);
      setContent(data !== undefined ? data.content : "");
      setCategory(data !== undefined ? data.category : "");
      setTitle(data !== undefined ? data.title : "");
      setDate(data !== undefined ? data.updatedAt : "");

      console.log(data);
    };

    fetching();
  }, [id.id, date]);

  return (
    <>
      {note && note.title ? (
        <div className="share-container">
          <h1>{title}</h1>
          <h3>{category}</h3>
          <p>{content}</p>
          <div className="App_button">
            <button onClick={copy}>{!copied ? "Copy link" : "Copied!"}</button>
          </div>
        </div>
      ) : (
        <div className="not-auth">
          <div className="dance-div">
            <h1>NOT AUTHORISED LMAO HAHA</h1>
            <h4>Make Note Public First</h4>
            <img src={dance} alt="Lol Not Auth" />
            <img src={dance2} alt="Lol Not Auth 2" />
          </div>
        </div>
      )}
    </>
  );
}

export default ShareNote;
