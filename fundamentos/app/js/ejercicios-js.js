//Ejercicio 1
function random(min, max) {
    if (typeof min != 'number' || typeof max != 'number') return null;
    return Math.floor((Math.random() * (max - min)) + min);
}


//Ejercicio 2


function comparacion(a, b) {
    if (a === b) return "son iguales";
    else if (a > b) return "es menor";
    else return "es mayor";
}


function pedirNumero(intento) {
    let num = +prompt(`Dime un número, intento ${intento+1}`);
    while (isNaN(num)) {
        num = prompt(`Dime otro, que tiene que ser un número, intento${intento+1}`);
    }
    return num;
}

class Juego {

    constructor(max_intentos, max_valor) {
        this.MAX_INTENTOS = max_intentos;
        this.NumIntentos = 0;
        this.NumeroABuscar = random(0, max_valor);
        this.JuegoTerminado = false;
    }

    comparar(numIntentado) {
        return comparacion(numIntentado, this.NumeroABuscar);
    }
}

function jugar() {
    alert("Vamos a empezar a jugar.");    
    do {
        let max_intentos = 10;
        let max_valor = 100;
        let juego = new Juego(max_intentos, max_valor);
        alert(`Acabo de generar un numero del 0 al ${max_valor}, intenta averiguarlo en menos de ${max_intentos} intentos... [${juego.NumeroABuscar}]`);
        while (juego.NumIntentos < juego.MAX_INTENTOS && juego.JuegoTerminado === false) {
            let num = pedirNumero(juego.NumIntentos);
            let c = juego.comparar(num);
            if (c === "son iguales") {
                alert("Has ganado!!! El número era " + num);
                juego.JuegoTerminado = true;
            } else {
                alert("Lo siento... Tu número " + c);
                juego.NumIntentos++;
            }
        }
        if(juego.NumIntentos === juego.MAX_INTENTOS) alert(`Has perdido... el numero era ${juego.NumeroABuscar}`);
    }while(confirm("¿Quieres volver a jugar?"));
}
//Ejercicio 3

function inicializarArray(longitud, valor) {
    if (typeof longitud !== 'number') return 'ERROR de longitud';
    let array = [];
    for (let i = 0; i < longitud; i++)
        array[i] = valor;
    return array;
}

//Ejercicio 4

function esPrimo(num) {
    if (num == 0 || num == 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i == 0) return false;
    }
    return true;
}

function numerosPrimosEntreEstosNumeros(a, b) {
    let arrayPrimos = new Array();
    for (let i = a; i < b; i++) {
        if (esPrimo(i))
            arrayPrimos.push(i);
    }
    return arrayPrimos;
}
//Ejercicio 5

//https://donnierock.com/2011/11/05/validar-un-dni-con-javascript/

function esNif(dni) {
    let numero;
    let letr;
    let letra;
    let expresion_regular_dni;
    let esDNI = true;

    expresion_regular_dni = /^\d{8}[a-zA-Z]$/;

    if (expresion_regular_dni.test(dni) == true) {
        numero = dni.substr(0, dni.length - 1);
        letr = dni.substr(dni.length - 1, 1);
        numero = numero % 23;
        letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
        letra = letra.substring(numero, numero + 1);
        if (letra != letr.toUpperCase()) {
            //console.log('Dni erroneo, la letra del NIF no se corresponde');
            esDNI = false;
        } else {
            //console.log('Dni correcto');
            esDNI = true;
        }
    } else {
        //console.log('Dni erroneo, formato no válido');
        esDNI = false;
    }

    return esDNI;
}

//Ejercicio 6
function quitarEspaciosVacios(cadena) {
    let cad = cadena.split(" ").join("");
    return cad;
}
function invertir(cadena) {
    let cadenaInvertida = "";
    for (let i = cadena.length - 1; i >= 0; i--) {
        cadenaInvertida += cadena.charAt(i);
    }
    return cadenaInvertida;
}

function esPalindromo(cadena) {
    let cad = quitarEspaciosVacios(cadena).toUpperCase();
    return (cad === invertir(cad));
}