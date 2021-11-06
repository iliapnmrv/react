import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortAmountDown } from '@fortawesome/fontawesome-free-solid'

export default function Header(props) {
  return (
    <>
      <div className="sub-header"></div>
      <div className="todoHeader">
        <h1>Task manager</h1>
        <FontAwesomeIcon onClick={() => { props.sort() }} className="sort-btn" icon={faSortAmountDown} />
      </div>
      <input
        className={props.todos.length !== 0 ? 'hasTodos' : 'hasNoTodos'}
        type="text"
        onKeyUp={(e) => e.code === 'Enter' ? props.add() : null}
        onChange={(e) => { props.changeText(e) }} id="input"
        value={props.todo}
      />
    </>
  )
}
