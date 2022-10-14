import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  if (props.phonetics) {
    return (
      <div className="Phonetics ">
        <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
          <i className="fa-solid fa-volume-high"></i>
        </a>
        <span className="Phonetic-text">{props.phonetics.text}</span>
      </div>
    );
  } else {
    return null;
  }
}
