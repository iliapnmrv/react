import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Pokemons from "./pokemon/Pokemons";
import Todo from "./todo/Todo";
import Navbar from "./components/Navbar/Navbar";

export default function App() {

    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route path="/todo">
                        <Todo />
                    </Route>
                    <Route path="/pokemons">
                        <Pokemons />
                    </Route>
                </Switch>
            </div>

        </Router>
    );
}

