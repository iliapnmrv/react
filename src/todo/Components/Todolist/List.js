import React from 'react'
import Item from './Item'
import './List.css'

export default function List(props) {
    return (
        <>
            {props.todos.length ?
                <ul>
                    {(props.todos.map((item) => {
                        return (
                            <Item todo={item.todo} id={item.id} remove={props.remove} />
                        )
                    }))}
                </ul>
                : null}
        </>
    )
}
