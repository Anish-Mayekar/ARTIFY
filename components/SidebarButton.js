// SidebarButton.js

import React from "react";

function SidebarButton(props) {
  return (
    <button onClick={props.onClick}>
      {props.label}
    </button>
  );
}

export default SidebarButton;
