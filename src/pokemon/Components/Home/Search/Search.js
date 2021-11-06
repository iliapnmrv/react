import React from 'react'
import './Search.css'

export default function Search(props) {
    return (
        <input
            className="search"
            onChange={({ target: { value } }) => props.search(value)}
            type="text"
            placeholder="Поиск покемона..."
        />
    )
}
