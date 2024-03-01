// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice.js";

console.log(cars);
const [honda, tesla] = cars;
const {speedStats: {topSpeed: teslaTopSpeed}} = tesla
const {coloursByPopularity: [teslaTopColour]} = tesla

const hondaTopSpeed = honda.speedStats.topSpeed;
const {coloursByPopularity: [hondaTopColour]} = honda

ReactDOM.render(
  <table>
    <thead>
      <tr>
        <th>Brand</th>
        <th>Top Speed</th>
        <th>Top Colour</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{tesla.model}</td>
        <td>{teslaTopSpeed}</td>
        <td>{teslaTopColour}</td>
      </tr>
      <tr>
        <td>{honda.model}</td>
        <td>{hondaTopSpeed}</td>
        <td>{hondaTopColour}</td>
      </tr>
    </tbody>
  </table>,
  document.getElementById("root")
);
