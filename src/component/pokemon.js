import React, { useEffect, useState } from "react";
import axios from "axios";
import PokemonList from "./pokemonList";

function Pokemon({addCard,myCard}) {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchName, setSearchName] = useState("");
  const searchByName = (event) => {
    setSearchName(event.target.value);
  };

  //Fetch data
//   const API_URL = "http://localhost:3030/api/cards";
//   const getPokemon = async () => {
//     setLoading(true);
//     const res = await axios(API_URL);
//     const pokemonData = await res.data;
//     console.log(pokemonData);
//     setPokemon(pokemonData);
//     setLoading(false);
//   };

//   useEffect(() => {
//     getPokemon();
//   }, []);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3030/api/cards?name=${searchName}&limit=30`)
      .then((res) => {
        setPokemon(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
      setLoading(false);
      
  }, [searchName]);


  if (loading) {
    return <h1>Loading....</h1>;
  }

  return (
    <>
      <div>
        <input
          type="text"
          name="search"
          placeholder="Find pokemon"
          value={searchName}
          onChange={searchByName}
        />
      </div>
      {pokemon && <PokemonList pokemons={pokemon} addCard={addCard} myCard={myCard} />}
    </>
  );
}

export default Pokemon;
