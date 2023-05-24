import React from "react";

const Stats = ({ keysPressed, accuracy }) => {
  return (
    <div className="stats">
      <div>Keys pressed: {keysPressed}</div>
      <div>Accuracy: {accuracy}%</div>
    </div>
  );
};

export default Stats;
