import React, { useState } from "react";
import Add from "./Components/Add/Add";
import Header from "./Components/Header/Header";
import List from "./Components/Todolist/List";
import './index.css'

export default function Todo() {

  const [todos, setTodos] = useState([])
  const [initial, setInitial] = useState([])
  const [sort, setSort] = useState(true)
  const [todo, setTodo] = useState()

  const changeText = (e) => {
    setTodo(e.target.value)
  }

  const addTodo = () => {
    if (todo != null && todo !== ' ') {
      let task = {
        'id': Date.now(),
        'todo': todo,
      }
      setTodos([...todos, task])
      setInitial([...initial, task])
      setTodo('')
    }
  }

  const removeTodo = (id) => {
    let newArr = todos.filter((item) => item.id !== id)
    let init = initial.filter((item) => item.id !== id)
    setTodos(newArr)
    setInitial(init)
  }

  const sortTodo = () => {
    let data
    if (sort) {
      setInitial(todos)
      data = [...todos]

      data.sort(function (a, b) {
        if (a.todo > b.todo) {
          return 1;
        }
        return -1;
      });
    } else {
      data = initial
    }
    setSort(!sort)
    setTodos(data)
  }

  return (
    <div className="todo-app">
      <div className="todo-container flex">
        <Header todo={todo} todos={todos} changeText={changeText} add={addTodo} sort={sortTodo} />
        <List todos={todos} remove={removeTodo} />
        <Add add={addTodo} />
      </div>
    </div>
  )
}
