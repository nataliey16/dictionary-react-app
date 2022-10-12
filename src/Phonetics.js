import React from "react";

export default function Phonetics(props) {
  console.log(props.phonetics.audio);
  if (props.phonetics) {
    return (
      <div className="Phonetics">
        <div>{props.phonetics.text}</div>
        <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
          Listen
        </a>
      </div>
    );
  } else {
    return null;
  }
}
