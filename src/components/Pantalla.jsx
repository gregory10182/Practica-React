import React from "react";



const Pantalla = props => {

    const {img} = props;
    
    return (
        <div className="marco">
            <div className="marcoI">
                <img id="pokeImg" src={img} alt=""/>
            </div>
        </div>
    )
}

export default Pantalla