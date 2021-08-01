import React, { useState } from "react";
import "./App.css";
import CalculateHp from "./component/calculateHp";
import CalculateStr from "./component/calculateStr";
import CalculateWeak from "./component/calculateWeak";
import CalculateHappiness from "./component/calculateHappiness";

import CardModal from "./component/cardModal";

const COLORS = {
  Psychic: "#f8a5c2",
  Fighting: "#f0932b",
  Fairy: "#c44569",
  Normal: "#f6e58d",
  Grass: "#badc58",
  Metal: "#95afc0",
  Water: "#3dc1d3",
  Lightning: "#f9ca24",
  Darkness: "#574b90",
  Colorless: "#FFF",
  Fire: "#eb4d4b",
};

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [myCard, setMyCard] = useState([]);

  const handleRemoveCard = (id) => {
    const removeCard = myCard.filter((card) =>{
      return card.id !== id
    })

    setMyCard(removeCard);
  };

  return (
    <div className="App">
      <div className="content">
        <h1>My Pokedex</h1>
        {console.log(myCard)}
        {myCard !== undefined ? (
          <div className={"inline-grid"}>
            {myCard.map((card, index) => (
              <div key={index} className="grid-container">
                <div className="flex">
                  <img src={card.imageUrl} alt={card.name} className="image-dex" />
                  <div className="box-secon-dex">
                    <h2 className="pokemon-name-dex">{card.name}</h2>
                    <div className="box-power-dex">
                      <h3>HP</h3>
                      <CalculateHp hp={card.hp} />
                    </div>
                    <div className="box-power-dex">
                      <h3>STR</h3>
                      {card.attacks ? (
                        <CalculateStr attacks={card.attacks} />
                      ) : (
                        <CalculateStr attacks={null} />
                      )}
                    </div>
                    <div className="box-power-dex">
                      <h3>WEAK</h3>
                      {card.weaknesses ? (
                        <CalculateWeak weaknesses={card.weaknesses} />
                      ) : (
                        <CalculateWeak weaknesses={null} />
                      )}
                    </div>
                    <div className="box-power-dex">
                      {card.attacks && card.weaknesses && card.hp ? (
                        <CalculateHappiness
                          hp={card.hp}
                          attacks={card.attacks}
                          weaknesses={card.weaknesses}
                        />
                      ) : (
                        <CalculateHappiness
                          hp={null}
                          attacks={null}
                          weaknesses={null}
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className="remove" onClick={()=>handleRemoveCard(card.id)}>
                  <h1>X</h1>
                </div>
              </div>
            ))}
          </div>
        ) : null}
        <CardModal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          addCard={(addCard) => (setMyCard([...myCard,addCard]))}
          myCard={myCard}
        />
      </div>

      <div className="bottom-bar">
        <button className="add-button" onClick={() => setIsOpen(true)}>
          <b>+</b>
        </button>
      </div>
    </div>
  );
}

export default App;
