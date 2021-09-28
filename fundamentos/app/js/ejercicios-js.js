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

juego();