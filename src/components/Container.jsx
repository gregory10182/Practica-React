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
                console.log(res);
                document.getElementById("pokeImg").src = "https://media.tenor.com/WUEKqaYhVsUAAAAC/pokemon-sad.gif";
                document.getElementById("tipo").innerHTML = "none";
                document.getElementById("movimientos").innerHTML = "none, none";
                document.getElementById("HP").innerHTML = "0";
                document.getElementById("ATK").innerHTML = "0";
                document.getElementById("DEF").innerHTML = "0";
                document.getElementById("SPATK").innerHTML = "0";
                document.getElementById("SPDEF").innerHTML = "0";
                document.getElementById("SPEED").innerHTML = "0";
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
                
                document.getElementById("pokeImg").src = pokeImg;
                document.getElementById("tipo").innerHTML = pokeT;
                document.getElementById("movimientos").innerHTML = pokeM1 + ', ' + pokeM2;
                document.getElementById("HP").innerHTML = hp;
                document.getElementById("ATK").innerHTML = atk;
                document.getElementById("DEF").innerHTML = def;
                document.getElementById("SPATK").innerHTML = spatk;
                document.getElementById("SPDEF").innerHTML = spdef;
                document.getElementById("SPEED").innerHTML = speed;
            }
        })
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