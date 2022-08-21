import React from "react";
import Movies from "./Movies";

import "./CSS/App.css";
import Sidebar from "./Sidebar";

function App() {
  const [newGenre, setNewGenre] = React.useState("All Movies");

  return (
    <>
      <div className="App">
        <Sidebar newGenre={newGenre} setNewGenre={setNewGenre} />
        <Movies newGenre={newGenre} setNewGenre={setNewGenre} />
      </div>
    </>
  );
}

export default App;
