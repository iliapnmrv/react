import React from 'react'

import './Pokemenu.css'
import PokemenuItem from './PokemenuItem'


export default function Pokemenu(props) {

    return (
        <>
            <ul>
                {props.data.map((poke, index) => {
                    return (
                        <>
                            <PokemenuItem url={poke.url} index={index} />
                        </>
                    )
                })}
            </ul>
        </>
    )
}
