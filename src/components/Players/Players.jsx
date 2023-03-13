import React from "react";
import { PlayerStyles } from "./PlayerStyles";

const Players = () => {
  return (
    <PlayerStyles>
      <div className="container">
        <div className="rotated-heading">
          <h4 class="side-title rotated-text">Players FÜR</h4>
          <span class="rotated-text__divider"></span>
        </div>
      </div>
    </PlayerStyles>
  );
};

export default Players;
