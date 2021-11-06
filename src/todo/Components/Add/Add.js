import React from 'react'
import './Add.css'

export default function Add(props) {
  return (
    <>
      <div className="add-button">
        <input
          type="button"
          value="Добавить"
          onClick={() => { props.add() }}
        />
        <div className="plus-btn">

        </div>
      </div>

    </>
  )
}
