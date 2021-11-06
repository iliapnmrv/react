import React from 'react'
import {
    Link
} from "react-router-dom";
import './Pokemenu.css'


export default function Pokemenu(props) {
    return (
        <>
            <ul>
                {props.data.map((poke, index) => {
                    return (
                        <>
                            <li key={index}>
                                <Link to={`/pokemons/${poke.name}`}>{poke.name}</Link>
                            </li>
                        </>
                    )
                })}
            </ul>
        </>
    )
}
