import React from 'react';
import './MultiplePokemon.css';

const MultiplePokemon = props => {
  const pokeImage = num => {
    let urlnum = num < 100 ? '0' + num : num;
    urlnum = num < 10 ? '0' + urlnum : urlnum;
    return 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/' + urlnum + '.png';
  };

  return (
    <div className="pokeCardBox">
      {props.pokemonList.map(pokemon => (
        <div key={pokemon.id} className="pokeCard">
            <img width = '200' height = '200' src = {pokeImage(pokemon.id)} alt={pokemon.name.english} />
            <p>ID: {pokemon.id}</p>
            <p>Name: </p>
            <ul>
                <li>English: {pokemon.name.english}</li>
                <li>Japanese: {pokemon.name.japanese}</li>
                <li>Chinese: {pokemon.name.chinese}</li>
                <li>French: {pokemon.name.french}</li>
            </ul>
            <p>Types: </p>
            <ul>
                {pokemon.type.map((type, index) => (
                    <li key = {index}>{type}</li>
                ))}
            </ul>
            <p>Base: </p>
            <ul>
                <li>Hp: {pokemon.base.HP}</li>
                <li>Attack: {pokemon.base.Attack}</li>
                <li>Defense: {pokemon.base.Defense}</li>
                <li>Sp. Attack: {pokemon.base['Sp. Attack']}</li>
                <li>Sp. Defense: {pokemon.base['Sp. Defense']}</li>
                <li>Speed: {pokemon.base.Speed}</li>
            </ul>
        </div>
      ))}
    </div>
  );
};

export default MultiplePokemon;
