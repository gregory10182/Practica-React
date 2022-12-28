import React from "react";
import Busqueda from "./Busqueda";
import Pantalla from "./Pantalla";
import Estadisticas from "./Estadisticas";
import { useState } from "react";


const Container = () => {

    const [img, setImg] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2_A-5YS5jJ_4P11o7NYoLw-LYBE0Am1zmej0ksS1WdHYy97Lg");
    const [type, setType] = useState("");
    const [Moves, setMoves] = useState([]);
    const [Stats, setStats] = useState([]);
    
    const pokeimg = (image) => {
        setImg(image);
    } 
    
    const pokeType = (type) => {
        setType(type);
    }

    const pokeMoves = (Moves) => {
        setMoves(Moves);
    }

    const pokeStats = (stats) => {
        setStats(stats);
    }

    return (
        <div className="Pokedex">
            <Busqueda 
                pokeimg={pokeimg} 
                pokeType={pokeType}
                pokeMoves={pokeMoves}
                pokeStats={pokeStats}
                />
            <Pantalla img={img}/>
            <Estadisticas  
                type = {type} 
                Moves = {Moves} 
                Stats = {Stats}
                />
        </div>
    )
}

export default Container