import {useState} from 'react'

import PokeNumberForm from './PokeNumberComponents/PokeNumberForm'
import IndividualPokemon from './PokeNumberComponents/IndividualPokemon'



const PokeNumber = props => {

    const [pokeNumber, setPokeNumber] = useState();
    const [currentPokemon, setCurrentPokemon] = useState({});

    const getPokeNumber = e => {
        const number = e.target.value
        setPokeNumber(number)
    }

    const getPokemon = e => {
        let importurl = 'http://localhost:8080'
        importurl += ('/pokemon/number/' + pokeNumber)
        console.log(importurl)
        fetch(importurl)
        .then(response => response.json())
        .then(response => {
            if(response.length > 0) {
                setCurrentPokemon(response[0]);
            }else {
                setCurrentPokemon({
                    id: pokeNumber,
                    name: {DoesNotExist: "No pokemon with id: " + pokeNumber},
                    type: [],
                    base: {}
                })
            }
        })
        .catch(err => console.error(err));
    }

    return (
        <div>
            <PokeNumberForm getPokeNumber = {getPokeNumber} getPokemon={getPokemon}/>
            <IndividualPokemon pokemon = {currentPokemon}/>
        </div>
    )
}

export default PokeNumber