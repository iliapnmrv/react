import React, { useState, useEffect } from 'react'
import Pokemenu from './Pokemenu/Pokemenu'
import { useHistory } from "react-router-dom";
import Search from './Search/Search';
import './Home.css'


export default function Home(props) {

    let history = useHistory();

    let data = props.data
    const [filtered, setFiltered] = useState([]);

    console.log(props.data);



    useEffect(
        _ => {
            setFiltered(data);
        },
        [data]
    );

    const search = val => {
        //текущие задачи и новые отфильтрованные задачи
        let currentData = [],
            newList = [];
        if (val !== "") {
            currentData = data;
            //фильтруем стейт в поисках совпадений
            newList = currentData.filter(poke => {
                // значение которое пользователь ввел и которое у нас
                // в стейте делаем строчными буквами чтобы конфликтов не было
                // мало ли пользователь ввель строчными буквами а у нас заглавные
                const lc = poke.name.toLowerCase();
                const filter = val.toLowerCase();
                // проверяем есть ли у нас этот элемент если есть возвращаем этот элемент
                return lc.includes(filter);
            });
        } else {
            // если в input ничего нету то есть пользователь стерь то
            // что ввел тогда возвращаем все задачи
            newList = data;
        }
        setFiltered(newList);
    };


    const getRandomPokemon = (min, max) => {
        let num = Math.round(Math.random() * (max - min) + min)
        history.push(`/pokemons/${data[num].name}`)
    }

    return (
        <>
            <h1>Выберите покемона, чтобы узнать информацию о нем</h1>
            <Search {...{ search }} />
            <button
                className="btn"
                onClick={() => { getRandomPokemon(0, data.length) }}
            >Выберите покемона за меня</button>
            <Pokemenu data={filtered} unfiltered={data} />
        </>
    )
}
