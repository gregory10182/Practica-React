import React from "react";

const Estadisticas = (props) => {
  const { type, Moves, Stats} = props;
  let moves;

  if (Moves.length > 1) {
    moves = Moves.join(" - ");
  } else {
    moves = Moves[0];
  }

  return (
    <div className="stats">
      <p>Tipo: </p>
      <p id="tipo">{type}</p>
      <br />
      <p>Movimientos: </p>
      <p id="movimientos">{moves}</p>
      <br />
      <br />
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
            <td id="HP">{Stats[0]}</td>
            <td id="ATK">{Stats[1]}</td>
            <td id="DEF">{Stats[2]}</td>
            <td id="SPATK">{Stats[3]}</td>
            <td id="SPDEF">{Stats[4]}</td>
            <td id="SPEED">{Stats[5]}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Estadisticas;
