import React, { useState, useEffect } from 'react'
import {
    Link
} from "react-router-dom";
import './PokemenuItem.css'

export default function PokemenuItem(props) {

    const [pokeData, setPokeData] = useState()

    useEffect(() => {
        fetch(props.url)
            .then(res => res.json())
            .then(data => setPokeData(data))
    }, [])


    console.log(pokeData);
    return (
        <>
            <li key={props.index}>
                <Link to={`/pokemons/${pokeData?.name}`}>
                    <div className="card">
                        <h2>{pokeData?.name}</h2>
                        <div className="info">
                            <div className="info-item">
                                <span>Уровень опыта: </span>
                                <span>{pokeData?.base_experience}</span>
                            </div>
                            <div className="info-item">
                                <span>Высота: </span>
                                <span>{pokeData?.height}</span>
                            </div>
                            <div className="info-item">
                                <span>По умолчанию</span>
                                <span>{pokeData?.is_default}</span>
                            </div>
                            <img src={pokeData?.sprites.front_default} alt="" />
                        </div>
                    </div>
                </Link>
            </li>
        </>
    )
}
