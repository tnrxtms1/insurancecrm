import logo from "./logo.svg";
import "./App.css";
import App_calendar from "./components/App_calendar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>SR BENEFIT SPECIALIST: DANIELLE THOMAS</p>
        <a
          className="App-link"
          href="#" // update and add function later
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Now
        </a>
      </header>
      <body className="App-body" />
      <App_calendar />
      {/* add reviews */}
      {/* add lead form */}
      <footer className="App-footer" />
    </div>
  );
}

export default App;

// remake header, body, and footer into separate components
