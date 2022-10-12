import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState("");

  function handleSearchResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function handleSearchSubmit(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleSearchResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <form
          className="Dictionary-search-engine"
          onChange={handleKeywordChange}
        >
          <div className="row">
            <input
              className="col-sm-6 form-control"
              type="search"
              placeholder="Enter a word"
              autoFocus="on"
            ></input>
            <input
              className="btn btn-primary col-sm-2"
              type="submit"
              value="Search"
              onClick={handleSearchSubmit}
            ></input>
          </div>
        </form>
      </section>
      <section>
        <Results results={results} />
      </section>
    </div>
  );
}
