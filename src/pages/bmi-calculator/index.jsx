import React, { useState } from "react";
import "./index.scss";

const BmiCalculator = () => {
  const [heightValue, setHeightValue] = useState(0);
  const [weightValue, setWeightValue] = useState(0);
  const [resultMessage, setResultMessage] = useState({});

  const calculateBmi = function (e) {
    e.preventDefault();
    let resultBmi = Number((weightValue / (heightValue / 100) ** 2).toFixed(1));

    switch (true) {
      case resultBmi < 18:
        setResultMessage({ resultMessage: "Underweight", resultBmi });
        break;
      case resultBmi > 18 && resultBmi < 25:
        setResultMessage({ resultMessage: "Normal weight", resultBmi });
        break;
      case resultBmi > 25 && resultBmi < 30:
        setResultMessage({ resultMessage: "Overweight", resultBmi });
        break;
      case resultBmi > 30:
        setResultMessage({ resultMessage: "Obesity", resultBmi });
        break;
      default:
        break;
    }
  };
  return (
    <div className="bmi">
      <form onSubmit={(e) => calculateBmi(e)}>
        <h1>BMI Calculator</h1>
        <label htmlFor="weight">Weight (kg):</label>
        <input
          type="number"
          id="weight"
          name="weight"
          value={weightValue}
          onChange={(e) => setWeightValue(e.target.value)}
          required
        />

        <label htmlFor="heihgt">Height (cm):</label>
        <input
          type="number"
          id="heihgt"
          name="heihgt"
          value={heightValue}
          onChange={(e) => setHeightValue(e.target.value)}
          required
        />
        <button>Calculate</button>
        {resultMessage.resultBmi ? (
          <div className="bmi_result">
            <p>
              Result: <span>{resultMessage.resultBmi}</span>
            </p>
            <p className="bmi_result_message"> {resultMessage.resultMessage}</p>
          </div>
        ) : (
          ""
        )}
      </form>
    </div>
  );
};

export default BmiCalculator;
