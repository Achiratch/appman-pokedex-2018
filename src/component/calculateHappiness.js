import React from "react";
import cute from "../cute.png";

function CalculateHappiness({ hp, attacks, weaknesses }) {
  // console.log("-----------------------");
  // console.log(attacks);
  //   console.log(weaknesses);
  let hpNumber, damage, weak, happy;
  // String to Number
  if (hp === null) {
    hpNumber = 0;
  } else if (hp > 100) {
    hpNumber = 100;
  } else {
    hpNumber = Number(hp);
    // console.log(hpNumber);
  }

  if (attacks === null) {
    damage = 0;
  } else {
    let alldamage = 0;
    let a = 0;
    for (const i of attacks) {
      if (!i.damage) {
        damage = 0;
        // console.log(0)
      } else {
        damage = i.damage.match(/\d+/g);
        a = Number(damage[0]);
      }
      //   console.log("a=",a);
      //   console.log("b=",b)
      //   console.log("alldamB=",alldamage)
      alldamage = alldamage + a;
    }
    // console.log("ALLDAM", alldamage);
    damage = alldamage;
  }

  if (weaknesses === null) {
    weak = 0;
  } else {
    weak = 100;
  }

  if (hpNumber && damage && weak) {
    // console.log(hpNumber);
    // console.log(damage);
    // console.log(weak);
    const happiness = Math.round(
      (hpNumber / 10 + damage / 10 + 10 - weak / 100) / 5
    );
    happy = happiness;
    // console.log(happy);
  }

  const happinessCount = (happy) => {
    let arr = [];
    for (let i = 0; i < happy; i++) {
      arr.push(i)
      //return <img src={cute} alt="cute" className="image-cute" />;
    }
    return arr.map(count=> <img key={count} src={cute} alt="cute" className="image-cute" />)
  };

  return <>{happinessCount(happy)}</>;
}

export default CalculateHappiness;
