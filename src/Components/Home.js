import React from "react";
// import { Link } from "react-router-dom";
import { useState } from "react";

export default function Home() {
  const [first, setfirst] = useState(true);

  return (
    <div>
      <button onClick={() => setfirst("Danies")}>Danies</button>
      <button onClick={() => setfirst("Jeeva")}>Jeeva</button>
      <button onClick={() => setfirst("Muniii")}>Muniii</button>
      <button onClick={() => setfirst("Dharun")}>Dharun</button>
      {first == "Danies" && (
        <div>
          <p>DANIES IS A _________</p>
        </div>
      )}

      {first == "Jeeva" && (
        <div>
          <p>JEEVA IS GOOD BOY MARVELOUS BOY</p>
        </div>
      )}
      {first == "Muniii" && (
        <div>
          <p>MUNI IS A EXTRA ORDINARY HARD WORKER</p>
        </div>
      )}
      {first == "Dharun" && (
        <div>
          <p>DHARUN is a hot girl favourite boy</p>
        </div>
      )}
      {first == "Babu" && (
        <div>
          <p>BABU is a lover of jeeva</p>
        </div>
      )}
    </div>
  );
}
// style={{ display: "grid" width: 20% }}
