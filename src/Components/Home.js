import React from "react";
// import { Link } from "react-router-dom";
import { useState } from "react";

export default function Home() {
  const [first, setfirst] = useState(true);

  const func = () => {
    setfirst("Danies");
  };

  return (
    <div>
      <button onClick={func}>Danies</button>
      <button onClick={func}>Jeeva</button>
      <button onClick={() => setfirst("Muniii")}>Muniii</button>
      <button onClick={() => setfirst("Dharun")}>Dharun</button>
      <button onClick={() => setfirst("Babu")}>Babu</button>
      <button onClick={() => setfirst("Hello")}>Babu</button>

      {first && (
        <div>
          <p>DANIES IS A _________</p>
        </div>
      )}
      {!first && (
        <div>
          <p>JEEVA IS GOOD BOY MARVELOUS BOY</p>
        </div>
      )}
      {/* <div>
        <p>MUNI IS A EXTRA ORDINARY HARD WORKER</p>
      </div>
      <div>
        <p>DHARUN is a hot girl favourite boy</p>
      </div>
      <div>
        <p>BABU is a lover of jeeva</p>
      </div> */}
    </div>
  );
}
// style={{ display: "grid" width: 20% }}
