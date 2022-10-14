import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState("");
  let [loaded, setLoaded] = useState(false);

  function handleSearchResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleSearchResponse);
  }

  function handleSearchSubmit(event) {
    event.preventDefault();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form
            className="Dictionary-search-engine"
            onChange={handleKeywordChange}
          >
            <div className="row">
              <div className="col-lg-8 col-lg-8">
                <input
                  className="form-control search-bar"
                  type="search"
                  placeholder="Enter a word"
                  autoFocus="on"
                ></input>
              </div>
              <div className="col-lg-4 col-lg-4">
                <input
                  className="btn btn-branding"
                  type="submit"
                  value="Search"
                  onClick={handleSearchSubmit}
                ></input>
              </div>
            </div>
          </form>
          <div className="suggested-words">
            suggested keywords: sunset, education, composting ...
          </div>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return <div>Loading...</div>;
  }
}
