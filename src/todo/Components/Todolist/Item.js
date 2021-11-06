import React from 'react'
import './Item.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/fontawesome-free-solid'

export default function Item(props) {
    return (
        <>
            <li key={props.id.toString()}>
                <div className="todo-item flex">
                    <p>{props.todo}</p>
                    <FontAwesomeIcon onClick={() => { props.remove(props.id) }} className="delete-btn" icon={faTimesCircle} />
                </div>
            </li>
        </>
    )
}
