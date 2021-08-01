import React from "react";

function CalculateHp({ hp }) {
  let hpNumber;
  if (hp === "None") {
    hpNumber = "0%";
  } else if (hp > 100) {
    hpNumber = "100%";
  } else {
    hpNumber = hp+"%";
  }

  //console.log(hpNumber);
  return (
    <>
      <span className="max-bar">
        <span id={"power-bar"} style={{width: `${hpNumber}`}}>&nbsp;</span>
      </span>
    </>
  );
}

export default CalculateHp;
