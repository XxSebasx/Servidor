class ConversorTemperatura{
    static celsiusAFahrenheit(celsius){
        return celsius * 9/5 + 32;
    }
}

let gradosCelsius = parseFloat(prompt("Dime los grados Celsius"));
console.log(ConversorTemperatura.celsiusAFahrenheit(gradosCelsius));