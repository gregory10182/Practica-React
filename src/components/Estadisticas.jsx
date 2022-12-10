import React from "react";



const Estadisticas = () => {
    return (
        <div className="stats">
                <p>Tipo: </p>
                <p id="tipo"></p>
                <br/>
                <p>Movimientos: </p>
                <p id="movimientos"></p>
                <br/>
                <br/>
                <table>
                    <thead>
                        <tr>
                            <th>HP</th>
                            <th>ATK</th>
                            <th>DEF</th>
                            <th>SP ATK</th>
                            <th>SP DEF</th>
                            <th>SPEED</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td id="HP">0</td>
                            <td id="ATK">0</td>
                            <td id="DEF">0</td>
                            <td id="SPATK">0</td>
                            <td id="SPDEF">0</td>
                            <td id="SPEED">0</td>
                        </tr>
                    </tbody>
                </table>

        </div>
    )
}

export default Estadisticas