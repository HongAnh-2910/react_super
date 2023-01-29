import React, { Component } from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

const calculatorCelsius = (celsius) => {
  return (celsius - 32.0) / 1.8;
};

const calculatorFahrenheit = (fahrenheit) => {
  return fahrenheit * 1.8 + 32;
};

const handleCaculator = (temperature, funcCalculator) => {
  let convert = Number(temperature);
  if (Number.isNaN(convert) || temperature === "") return "";
  let output = funcCalculator(convert);
  output = Math.round(output * 1000) / 1000;
  return String(output);
};

export default class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temperature: "",
      scale: "c",
    };
  }

  handleSetStateChange = (scale) => (value) => {
    this.setState({
      temperature: value,
      scale: scale,
    });
  };

  render() {
    const { scale, temperature } = this.state;
    let celsius =
      scale === "f"
        ? handleCaculator(temperature, calculatorCelsius)
        : temperature;
    let fahrenheit =
      scale === "c"
        ? handleCaculator(temperature, calculatorFahrenheit)
        : temperature;
    return (
      <div>
        <h1>Calculator</h1>
        <TemperatureInput
          title="Celsius"
          temperature={celsius}
          getValueChange={this.handleSetStateChange("c")}
        />
        <TemperatureInput
          title="Fahrenheit"
          temperature={fahrenheit}
          getValueChange={this.handleSetStateChange("f")}
        />
        <BoilingVerdict celsius={Number(celsius)} />
      </div>
    );
  }
}
