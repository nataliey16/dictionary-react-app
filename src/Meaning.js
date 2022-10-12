import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  if (props.meaning.definitions) {
    return (
      <div className="Meaning">
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <br />
              <h2>{props.meaning.partOfSpeech}</h2>{" "}
              <strong>Definition: </strong>
              {definition.definition}
              <br />
              <em>{definition.example}</em>
              <Synonyms synonyms={props.meaning.synonyms} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
