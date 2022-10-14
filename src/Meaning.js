import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  if (props.meaning.definitions) {
    return (
      <div className="Meaning">
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <section>
                <h2>{props.meaning.partOfSpeech}</h2>
                <div className="Definition">{definition.definition}</div>
                <div className="Example"> {definition.example}</div>
                <Synonyms synonyms={props.meaning.synonyms} />
              </section>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
