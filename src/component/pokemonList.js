import React from "react";

//Level Tube
import CalculateHp from "./calculateHp";
import CalculateStr from "./calculateStr";
import CalculateWeak from "./calculateWeak";
import CalculateHappiness from "./calculateHappiness";

function PokemonList({ pokemons, addCard, myCard }) {
  // if (myCard !== undefined) {
    
  //   // console.log(pokemons.cards)
  //   for (const i of myCard) {
  //     console.log(i.id);
  //     pokemons = pokemons.cards.filter((card) => {
  //        console.log(card.id)
  //       return i.id !== card.id;
  //     });
  //     // console.log(pokemons)
  //   }
  //   //  console.log(pokemons);
  // }

  return (
    <div>
      {pokemons.cards !== undefined ? (
        <div>
          {pokemons.cards.map((card) => (
            <div key={card.id} className="container">
              <div className="flex">
                <img src={card.imageUrl} alt={card.name} className="image" />
                <div className="box-secon">
                  <h2 className="pokemon-name">{card.name}</h2>
                  <div className="box-power">
                    <h3>HP</h3>
                    <CalculateHp hp={card.hp} />
                  </div>
                  <div className="box-power">
                    <h3>STR</h3>
                    {card.attacks ? (
                      <CalculateStr attacks={card.attacks} />
                    ) : (
                      <CalculateStr attacks={null} />
                    )}
                  </div>
                  <div className="box-power">
                    <h3>WEAK</h3>
                    {card.weaknesses ? (
                      <CalculateWeak weaknesses={card.weaknesses} />
                    ) : (
                      <CalculateWeak weaknesses={null} />
                    )}
                  </div>
                  <div className="box-power">
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
              <div className="add">
                <h1 onClick={() => addCard(card)}>ADD +</h1>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default PokemonList;
