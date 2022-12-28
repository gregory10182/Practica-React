import React from "react";
import {Pokemon} from "./Functions/Pokeapi";
import { useState } from "react";


const Busqueda = ({pokeimg, pokeType, pokeMoves, pokeStats}) => {

    const [nombre, setNombre] = useState("");
    

    const buscar = async () => {
        const pokemon = await Pokemon(nombre);
        
        if(!pokemon) {
            pokeimg("https://media.tenor.com/WUEKqaYhVsUAAAAC/pokemon-sad.gif");
            pokeType("");
            pokeMoves([]);
            pokeStats([0,0,0,0,0,0]);
            return;
        }

        let {sprites, types, abilities, stats} = pokemon;

        pokeimg(sprites.front_default);
        pokeType(types[0].type.name);
        pokeMoves(abilities.map ((move) => move.ability.name))
        pokeStats(stats.map ((stat) => stat.base_stat));
        
    }

    return (
        <div className="inputs">
            <input 
                className="nombre" 
                id="nombre" 
                name="nombre"
                onChange={(e) => { setNombre(e.target.value) }} 
                type="text" />
            <button 
                onClick={buscar} 
                className="btn"></button>
        </div>
    )
}

export default Busqueda