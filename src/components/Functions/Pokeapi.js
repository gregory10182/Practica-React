export const Pokemon = async (nombre) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
    let data = "";
    if (res.status !== 200) {
        return false
    }
    else {
        data = await res.json();
    }
    
    return data;

    // let pokeImg = data.sprites.front_default;
    // let pokeT = data.types[0].type.name;
    // let pokeM1 = data.abilities[0].ability.name;
    // let pokeM2 = data.abilities[1].ability.name;
    // let hp = data.stats[0].base_stat;
    // let atk = data.stats[1].base_stat;
    // let def = data.stats[2].base_stat;
    // let spatk = data.stats[3].base_stat;
    // let spdef = data.stats[4].base_stat;
    // let speed = data.stats[5].base_stat;
     
}