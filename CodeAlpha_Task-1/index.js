let converter = () => {
  let dig = document.getElementById("digit").value;
  let scale = document.getElementById("temp").value;

  let toFahrenheit = (cel) => {
    let fahrenheit = Math.round((cel * 9) / 5 + 32);
    return fahrenheit;
  };

  let toCelsius = (fah) => {
    let celsius = Math.round(((fah - 32) * 5) / 9);
    return celsius;
  };

  let res;
  if (scale == "cel") {
    res = toFahrenheit(dig);
    document.getElementById("result").innerHTML = `${res}&deg; Fahrenheit`;
  } else {
    res = toCelsius(dig);
    document.getElementById("result").innerHTML = `${res}&deg; Celsius`;
  }
};
