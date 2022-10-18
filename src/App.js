import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App container-fluid">
      <header className="App-header">Dictionary</header>
      <hr className="hr-text" />
      <Dictionary />
      <footer className="app-footer">
        This project was coded by
        <strong> Natalie Yeung. </strong>
        <br />
        It is
        <a
          href="https://github.com/nataliey16/dictionary-react-app.git"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          open-sourced on Github
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://helpful-belekoy-2c5793.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          Netlify.
        </a>
        <hr className="hr-text" />
      </footer>
    </div>
  );
}

export default App;
