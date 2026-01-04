import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => setJokes(response.data))
      .catch((error) => console.error("Error fetching joke:", error));
  }, []);

  return (
    <div id="root">
      <h1>Joke of the Day</h1>
      <div className="jokes-container">
        {jokes.map((joke) => (
          <div className="card" key={joke.id}>
            <h2>{joke.setup}</h2>
            <p>{joke.punchline}</p>
          </div>
        ))}
      </div>
      <a className="read-the-docs" href="#">
        More jokes
      </a>
    </div>
  );
}

export default App;
