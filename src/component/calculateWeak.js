import React from "react";

function CalculateWeak({ weaknesses }) {
  let weak;
  if (weaknesses === null) {
    weak = "0%";
  } else if ((weaknesses.length = 1)) {
    weak = "100%";
  }
  return (
    <>
      <span className="max-bar">
        <span id={"power-bar"} style={{width: `${weak}`}}>&nbsp;</span>
      </span>
    </>
  );
}

export default CalculateWeak;
