import React, { useState } from "react";

import "./CSS/Sidebar.css";

function Sidebar(props) {
  const columnName = ["All Movies", "Action", "Comedy"];

  return (
    <>
      <div className="main-sidebar">
        {columnName.map((value) => {
          return (
            <p
              className="sidebar-p"
              onClick={() => {
                props.setNewGenre(value);
                console.log("button clicked");
              }}
            >
              {value}
            </p>
          );
        })}
      </div>
    </>
  );
}

export default Sidebar;

// <div className="main-sidebar">
//   <p className="sidebar-p" >All Movies</p>
//   <p className="sidebar-p">Comedy</p>
//   <p className="sidebar-p">Action</p>
// </div>
