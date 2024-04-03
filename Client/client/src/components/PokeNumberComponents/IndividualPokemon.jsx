import './IndividualPokemon.css';

const IndividualPokemon = ({pokemon}) => {

    const pokeImage = (num) => {
        let urlnum = (num < 100 ? '0' + num : num)
        urlnum = (num < 10 ? '0' + urlnum : urlnum)
        return 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/' + urlnum + '.png'
    }

    if(Object.hasOwn(pokemon, 'id')) {
        return (
            <div className='pokeCard'>
                <img width = '200' height = '200' src = {pokeImage(pokemon.id)}/><br></br>
                <span>ID: {pokemon.id}</span><br></br>
                <span>Name: </span>
                <ul>
                    {Object.keys(pokemon.name).map(key => {
                        return <li key = {key}> {pokemon.name[key]}</li>
                    })}
                </ul>
                <span>Types: </span>
                <ul>
                    {pokemon.type.map(t => 
                        <li key = {t} > {t} </li>
                    )}
                </ul>
                <span>Base: </span>
                <ul>
                    {Object.keys(pokemon.base).map(key => {
                        return <li key = {key} > {pokemon.base[key]}</li>
                    })}
                </ul>
    
            </div>
        )
    }
    return (
        <h3>Input pokemon number above to see stats</h3>
    )

}

export default IndividualPokemon