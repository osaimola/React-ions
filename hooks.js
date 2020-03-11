import React, { useState, useEffect } from "react";

function App() {
  let fruitDump = { type: "berry", name: "strawberry" };
  const [fruit, setFruit] = useState(fruitDump);
  const [quality, setQuality] = useState("juicy");

  useEffect(() => {
    document.title = "Juicy " + fruit.name;
    console.log("this will run on every render");
    alert("reloaded");

    return () => alert("are you sure you want to close this window?");
  });

  useEffect(() => {
    alert("Welcome to Juicy Fruity");
    console.log("this will run only on the first render");
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          What fruit do I want?
        </p>
        <a
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            fruit.name === "strawberry"
              ? (fruitDump.name = "blueberry")
              : (fruitDump.name = "strawberry");
            setFruit(fruitDump);
            setQuality(quality === "juicy" ? "sweet" : "juicy");
          }}
        >
          Banana?
        </a>
        <p>
          Everyone knows you want some {quality} {fruit.name}{" "}
        </p>
      </header>
    </div>
  );
}

export default App;
