import React, { useEffect, useState } from 'react'
import BackButton from '../BackButton/BackButton';
import Pokedata from './Pokedata';
import './Pokemon.css'

export default function Pokemon(props) {

    const [pokemonData, setPokemonData] = useState('')

    const getData = () => {
        fetch(props.url)
            .then(response => response.json())
            .then(data => setPokemonData(data));
    }

    useEffect(() => {
        getData()
    }, [])

    console.log(pokemonData);

    return (
        <>
            <div className="poke-page">
                <BackButton />
                <div className="poke-card">
                    <h1>{props.name}</h1>
                    <Pokedata name="Уровень опыта" data={pokemonData?.base_experience} />
                    <Pokedata name="Высота" data={pokemonData?.height} />
                    <img src={pokemonData?.sprites?.front_default} alt="" />
                </div>
            </div>

        </>
    )
}
