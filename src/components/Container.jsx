import React from "react";
import Busqueda from "./Busqueda";
import Pantalla from "./Pantalla";
import Estadisticas from "./Estadisticas";

export const PokeimgContext = React.createContext();


const Container = () => {

    const Pokemon = (nombre) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
        .then((res) => {
            if (res.status !== 200) {
                pokeImage("https://media.tenor.com/WUEKqaYhVsUAAAAC/pokemon-sad.gif")
                pokeType('none');
                pokeMoves('none', 'none');
                pokeStats('0', '0', '0', '0', '0', '0');
            }
            else {
                return res.json();
            }
        }).then(data => {
            if (data) {
                console.log(data);
                let pokeImg = data.sprites.front_default;
                let pokeT = data.types[0].type.name;
                let pokeM1 = data.abilities[0].ability.name;
                let pokeM2 = data.abilities[1].ability.name;
                let hp = data.stats[0].base_stat;
                let atk = data.stats[1].base_stat;
                let def = data.stats[2].base_stat;
                let spatk = data.stats[3].base_stat;
                let spdef = data.stats[4].base_stat;
                let speed = data.stats[5].base_stat;
                pokeImage(pokeImg);
                pokeType(pokeT);
                pokeMoves(pokeM1, pokeM2);
                pokeStats(hp, atk, def, spatk, spdef, speed);
            }
        })
    }

    const pokeImage = (url) => {
        const pokePhoto = document.getElementById("pokeImg");
        pokePhoto.src = url;
    }
    
    
    const pokeType = (tipo) => {
        const type = document.getElementById("tipo");
        type.innerHTML = tipo;
    }
    
    const pokeMoves = (m1, m2) => {
        const moves = document.getElementById("movimientos");
        moves.innerHTML = m1 + ', ' + m2;
    }
    
    const pokeStats = (hp, atk, def, spatk, spdef, speed) => {
        const health = document.getElementById("HP");
        const attack = document.getElementById("ATK");
        const defense = document.getElementById("DEF");
        const sp_attack = document.getElementById("SPATK");
        const sp_defense = document.getElementById("SPDEF");
        const speedy = document.getElementById("SPEED");
    
        health.innerHTML = hp;
        attack.innerHTML = atk
        defense.innerHTML = def
        sp_attack.innerHTML = spatk
        sp_defense.innerHTML = spdef
        speedy.innerHTML = speed
    }

    return (
        <div className="Pokedex">
            <Busqueda Pokemon={Pokemon}/>
            <Pantalla />
            <Estadisticas/>
        </div>
    )
}

export default Container