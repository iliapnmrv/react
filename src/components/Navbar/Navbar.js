import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/todo">Todo</Link>
                </li>
                <li>
                    <Link to="/pokemons">Pokemons</Link>
                </li>
            </ul>
        </nav>
    )
}
