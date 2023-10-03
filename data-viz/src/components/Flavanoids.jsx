import React from "react";
import {
  meanCalculator,
  medianCalculator,
  modeCalculator,
} from "../services/utils.tsx";
import "../styles/table.css";

import jsonData from "./dataSet.json";
const Flavanoids = () => {
  // Filtering based on Class
  const class1 = jsonData.filter((ele) => ele.Alcohol === 1);

  const class2 = jsonData.filter((ele) => ele.Alcohol === 2);

  const class3 = jsonData.filter((ele) => ele.Alcohol === 3);

  // calculating the class-wise mean, median, mode of
  // “Flavanoids” for the filtered dataset.
  const class1Mean = meanCalculator(class1.map((data) => data.Flavanoids));
  const class1Median = medianCalculator(class1.map((data) => data.Flavanoids));
  const class1Mode = modeCalculator(class1.map((data) => data.Flavanoids));

  const class2Mean = meanCalculator(class2.map((data) => data.Flavanoids));
  const class2Median = medianCalculator(class2.map((data) => data.Flavanoids));
  const class2Mode = modeCalculator(class2.map((data) => data.Flavanoids));

  // Since some Flavanoids data in dataset is in string - converting into Number
  const class3Mean = meanCalculator(
    class3.map((data) => Number(data.Flavanoids))
  );
  const class3Median = medianCalculator(
    class3.map((data) => Number(data.Flavanoids))
  );
  const class3Mode = modeCalculator(
    class3.map((data) => Number(data.Flavanoids))
  );

  //  "Flavanoids": ".98", in string in class-3 so the result is NaN

  return (
    <div className="tableSection">
      <h2>
        <span className="span1">Flavanoids</span> Table
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
              <td>Flavanoids Mean</td>
              <td>{class1Mean}</td>
              <td>{class2Mean}</td>
              <td>{class3Mean}</td>
            </tr>
            <tr>
              <td>Flavanoids Median</td>
              <td>{class1Median}</td>
              <td>{class2Median}</td>
              <td>{class3Median}</td>
            </tr>
            <tr>
              <td>Flavanoids Mode</td>
              <td>{class1Mode}</td>
              <td>{class2Mode}</td>
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
export default Flavanoids;
