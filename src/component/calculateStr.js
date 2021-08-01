import React from "react";

function CalculateStr({ attacks }) {
  let str;
  if (attacks === null) {
    str = "0%";
  } else if (attacks.length > 1) {
    str = "100%";
  } else {
    str = "50%";
  }
  return (
    <>
      <span className="max-bar">
        <span id={"power-bar"} style={{width: `${str}`}}>&nbsp;</span>
      </span>
    </>
  );
}

export default CalculateStr;
