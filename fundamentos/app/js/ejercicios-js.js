//Ejercicio 1
function random(min, max){
    return Math.floor((Math.random() * (max-min)) +min);
}

console.log(random(99,100));

//Ejercicio 2

function comparacion(a, b){
    if(a===b) return "son iguales";
    else if(a > b) return "es menor";
    else return "es mayor";
}


function pedirNumero(){
    let num = +prompt("Dime un número");
    while(isNaN(num)){
        num = prompt("Dime otro, que tiene que ser un número");
    }
    return num;
}

function juego(){
    const MAX_INTENTOS = 10;
    let cont = 0;
    alert("Vamos a empezar a jugar.");
    const N_ALEATORIO = random(0,100);
    alert("Acabo de generar un numero del 0 al 100, intenta averiguarlo en menos de 10 intentos "+N_ALEATORIO);
    while(cont < MAX_INTENTOS){
        alert("intento "+(cont+1));
        let num = pedirNumero();
        let c = comparacion(num, N_ALEATORIO);
        if(c ==="son iguales"){
            alert("Has ganado!!! El número era "+num);
            return;
        }else{
            alert("Lo siento... Tu número "+c);
            cont++;
        }
    }
}

//juego();


//Ejercicio 3

function inicializarArray(longitud, valor){
    if(typeof longitud !== 'number') return 'ERROR de longitud';
    let array = new Array(longitud);
    for(let i=0;i<array.length;i++)
        array[i]=valor;
    return array;
}

console.log(inicializarArray(4,""));

//Ejercicio 4

function esPrimo(num){
	if (num == 0 || num == 1) return false;
	for (let i = 2; i < num; i++) {
		if (num % i == 0) return false;
	}
	return true;
}

function numerosPrimosEntreEstosNumeros(a,b){
    let arrayPrimos = new Array();
    for(let i = a; i < b; i++){
        if(esPrimo(i))
            arrayPrimos.push(i);
    }
    return arrayPrimos;
}

console.log(numerosPrimosEntreEstosNumeros(0,100));


//Ejercicio 5

//https://donnierock.com/2011/11/05/validar-un-dni-con-javascript/
function nif(dni) {
    let numero;
    let letr;
    let letra;
    let expresion_regular_dni;
   
    expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
   
    if(expresion_regular_dni.test (dni) == true){
       numero = dni.substr(0,dni.length-1);
       letr = dni.substr(dni.length-1,1);
       numero = numero % 23;
       letra='TRWAGMYFPDXBNJZSQVHLCKET';
       letra=letra.substring(numero,numero+1);
      if (letra!=letr.toUpperCase()) {
         alert('Dni erroneo, la letra del NIF no se corresponde');
       }else{
         alert('Dni correcto');
       }
    }else{
       alert('Dni erroneo, formato no válido');
     }
  }

  //nif("44667260H");

  //Ejercicio 6

  function invertir(cadena){
      let cadenaInvertida = "";
      for(let i = cadena.length-1; i >= 0; i--){
          cadenaInvertida += cadena.charAt(i);
      }
      return cadenaInvertida;
  }
  console.log(invertir(invertir("pepe")))

  function esPalindromo(cadena){
      return (cadena === invertir(cadena));        
  }

  console.log(esPalindromo("ama"));