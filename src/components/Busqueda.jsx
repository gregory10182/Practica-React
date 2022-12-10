import React from "react";



const Busqueda = props => {
    const {Pokemon} = props;


    const buscar = () => {
        const nombre = document.getElementById("nombre").value;
        Pokemon(nombre);
    }

    return (
        <div className="inputs">
            <input className="nombre" id="nombre" name="nombre" type="text" />
            <button onClick={buscar} className="btn"></button>
        </div>
    )
}

export default Busqueda