function inverterString(str) {
    var inverter = '';
    for (var i = str.length - 1; i >= 0; i--) {
        inverter += str.charAt(i);
    }
    return inverter;
}

var minhaString = "Olá, Target Sistemas! Eu sou a Kamila :)";
var stringInvertida = inverterString(minhaString);
console.log("String original: " + minhaString);
console.log("String invertida: " + stringInvertida);
