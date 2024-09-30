function conversarFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

let gradosCelsius = parseFloat(prompt("Dime los grados Celsius"));
alert(conversarFahrenheit(gradosCelsius) + " grados Fahrenheit");