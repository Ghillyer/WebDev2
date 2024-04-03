import React, { useState } from 'react';
import MultiplePokemon from './PokeNumberComponents/MultiplePokemon';
import StatsForm from './PokeNumberComponents/StatsForm';

const Stats = () => {
  const [PokeHP, setPokeHP] = useState(0);
  const [PokeAttack, setPokeAttack] = useState(0);
  const [PokeDefense, setPokeDefense] = useState(0);
  const [PokeSpAttack, setPokeSpAttack] = useState(0);
  const [PokeSpDefense, setPokeSpDefense] = useState(0);
  const [PokeSpeed, setPokeSpeed] = useState(0);
  const [FilteredPokemon, setFilteredPokemon] = useState([]);

  const getPokeHP = e => {
    const hp = e.target.value;
    setPokeHP(hp);
  };


  const getPokeAttack = e => {
    const attack = e.target.value;
    setPokeAttack(attack);
  };


  const getPokeDefense = e => {
    const defense = e.target.value;
    setPokeDefense(defense);
  };


  const getPokeSpAttack = e => {
    const spattack = e.target.value;
    setPokeSpAttack(spattack);
  };


  const getPokeSpDefense = e => {
    const spdefense = e.target.value;
    setPokeSpDefense(spdefense);
  };


  const getPokeSpeed = e => {
    const speed = e.target.value;
    setPokeSpeed(speed);
  };

const getFilteredPokemon = async () => {
  let importurl = 'http://localhost:8080';
  importurl += '/pokemon/base/' + PokeHP + '/' + PokeAttack + '/' + PokeDefense + '/' + PokeSpAttack + '/' + PokeSpDefense + '/' + PokeSpeed;
  try {
    const response = await fetch(importurl);
    const data = await response.json();
    setFilteredPokemon(data);
  } catch (error) {
    console.error(error);
  }
};

return (
  <div>
    <StatsForm getPokeHP={getPokeHP} getPokeAttack={getPokeAttack} getPokeDefense={getPokeDefense} getPokeSpAttack={getPokeSpAttack} getPokeSpDefense={getPokeSpDefense} getPokeSpeed={getPokeSpeed} getFilteredPokemon={getFilteredPokemon}/>
    <div className="PokeCards">
      <MultiplePokemon pokemonList={FilteredPokemon} />
    </div>
  </div>
);
};

export default Stats;