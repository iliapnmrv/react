import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./Components/Home/Home";
import Pokemon from "./Components/Pokemon/Pokemon";
import './index.css'


export default function Pokemons() {

  const [data, setData] = useState([])


  const getData = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
      .then(response => response.json())
      .then(data => setData(data.results));
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="poke-container">
      <Switch>
        {data.map((poke) => {
          return (
            <Route path={`/pokemons/${poke.name}`}>
              <Pokemon name={poke.name} url={poke.url} />
            </Route>
          )
        })}
        <Route path="/pokemons">
          <Home data={data} />
        </Route>
      </Switch>
    </div>
  );
}

