
const PokeNumberForm = props => {

    return (
        <div>
            <div>
                <label>Input a number</label><br></br>
                <input id = 'inputPokeNumber' name = 'pokeNumber' type = 'number' onChange={props.getPokeNumber}></input><br></br>
                <button id = 'buttonPokeNumber' onClick={props.getPokemon}>Get Pokemon</button>
            </div>
        </div>
    )
}

export default PokeNumberForm