import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const [honda,tesla]=cars;
const {coloursByPopularity:[teslaTopColour]}=tesla
const {speedStats:{topSpeed:teslaTopSpeed}} =tesla

const {coloursByPopularity:[hondaTopColour]}=honda
const {speedStats:{topSpeed:hondaTopSpeed}} =honda
ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
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
  </table>,
  document.getElementById("root")
);
