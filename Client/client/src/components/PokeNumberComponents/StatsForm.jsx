import React from 'react';

const StatsForm = props => {
  return (
    <div>
      <h1>Find Pokemon with stats greater than: </h1>
      <div>
        <label htmlFor="hp">HP</label>
        <input id="hp" name="PokeHP" type="number" onChange={props.getPokeHP} /><br />


        <label htmlFor="attack">Attack</label>
        <input id="attack" name="PokeAttack" type="number" onChange={props.getPokeAttack} /><br />


        <label htmlFor="defense">Defense</label>
        <input id="defense" name="PokeDefense" type="number" onChange={props.getPokeDefense} /><br />


        <label htmlFor="spattack">Special Attack</label>
        <input id="spattack" name="PokeSpAttack" type="number" onChange={props.getSpAttack} /><br />


        <label htmlFor="spdefense">Special Defense</label>
        <input id="spdefense" name="PokeSpDefense" type="number" onChange={props.getSpDefense} /><br />


        <label htmlFor="speed">Speed</label>
        <input id="speed" name="PokeSpeed" type="number" onChange={props.getPokeSpeed} /><br />


        <button id="buttonPokeStats" onClick={props.getFilteredPokemon}>Find Pokemon</button>

      </div>
    </div>
  );
}

export default StatsForm;
