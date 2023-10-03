import React from "react";
import {
  meanCalculator,
  medianCalculator,
  modeCalculator,
  calculateGamma,
} from "../services/utils.tsx";
import "../styles/table.css";

import jsonData from "./dataSet.json";

const Gamma1 = () => {
  // calculating the new property “Gamma” for each point of
  // the dataset.
  const datasetWithGammaProperty = calculateGamma(jsonData);
  console.log("datasetWithGammaProperty", datasetWithGammaProperty);

  // Filtering based on Class

  const class1 = datasetWithGammaProperty.filter((ele) => ele.Alcohol === 1);

  const class2 = datasetWithGammaProperty.filter((ele) => ele.Alcohol === 2);

  const class3 = datasetWithGammaProperty.filter((ele) => ele.Alcohol === 3);

  // calculating the class-wise mean, median, mode of
  // "Gamma" for the filtered dataset.
  const class1Mean = meanCalculator(class1.map((data) => Number(data.Gamma)));
  const class1Median = medianCalculator(
    class1.map((data) => Number(data.Gamma))
  );
  const class1Mode = modeCalculator(class1.map((data) => Number(data.Gamma)));

  const class2Mean = meanCalculator(class2.map((data) => Number(data.Gamma)));
  const class2Median = medianCalculator(
    class2.map((data) => Number(data.Gamma))
  );
  const class2Mode = modeCalculator(class2.map((data) => Number(data.Gamma)));

  const class3Mean = meanCalculator(class3.map((data) => Number(data.Gamma)));
  const class3Median = medianCalculator(
    class3.map((data) => Number(data.Gamma))
  );
  const class3Mode = modeCalculator(class3.map((data) => Number(data.Gamma)));

  // console.log("a", class3Mean);
  // console.log("b", class3Median);
  // console.log("e", class2Mode);
  // console.log("d", class1Mode);
  // console.log("c", class3Mode);

  return (
    <div className="tableSection">
      <h2>
        <span className="span1">Gamma</span> Table
      </h2>
      <div className="tableBlock">
        <table border="1">
          <thead>
            <tr>
              <th>Measure</th>
              <th>Class 1</th>
              <th>Class 2</th>
              <th>Class 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Gamma Mean</td>
              <td>{class1Mean}</td>
              <td>{class2Mean}</td>
              <td>{class3Mean}</td>
            </tr>
            <tr>
              <td>Gamma Median</td>
              <td>{class1Median}</td>
              <td>{class2Median}</td>
              <td>{class3Median}</td>
            </tr>
            <tr>
              <td>Gamma Mode</td>
              <td>
                {class1Mode.length > 2
                  ? "multimodal"
                  : class3Mode.length > 1
                  ? "bimodal"
                  : class3Mode}
              </td>
              <td>
                {class2Mode.length > 2
                  ? "multimodal"
                  : class3Mode.length > 1
                  ? "bimodal"
                  : class3Mode}
              </td>
              <td>
                {class3Mode.length > 2
                  ? "multimodal"
                  : class3Mode.length > 1
                  ? "bimodal"
                  : class3Mode}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Gamma1;
