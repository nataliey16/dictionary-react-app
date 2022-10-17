import React, { useState } from "react";
import { MagnifyingGlass } from "react-loader-spinner";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("sunset");
  let [results, setResults] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionarySearchResponse(response) {
    setResults(response.data[0]);
    setLoaded(true);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionarySearchResponse);

    let pexelsApiKey =
      "563492ad6f917000010000018203fdecdc824f56918529eacac1df37";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;

    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios
      .get(pexelsApiUrl, {
        headers: headers,
      })
      .then(handlePexelsResponse);
  }

  function handleSearchSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1 className="header-question">What word do you want to look up?</h1>
          <form
            className="Dictionary-search-engine"
            onChange={handleKeywordChange}
          >
            <div className="row">
              <div className="col-lg-8 col-lg-8">
                <input
                  className="form-control search-bar"
                  type="search"
                  placeholder="Example: sunset"
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
            Suggested keywords: sunset, education, composting ...
          </div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    search();
    return (
      <div className="Loading text-center">
        <div className="Loading-spinner">
          <MagnifyingGlass
            visible={true}
            height="100"
            width="100"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor="#f0ece2"
            color="#596e79"
          />
        </div>
      </div>
    );
  }
}
