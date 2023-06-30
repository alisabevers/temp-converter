// The forecast today is 293 kelvin, and this value will stay constant
const kelvin = 293;

// Celsius is 273 less than the value of kelvin. 
const celsius = kelvin - 273;

// fahrenheit is calculated with the equation below. The .floor method will round the final number to the nearest whole number.
let fahrenheit = Math.floor(celsius * (9/5) + 32);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
