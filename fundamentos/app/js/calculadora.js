
class Calculadora {
    constructor() {
        this.NumeroPantalla = '0';
        this.Op = '+';
        this.Resultado = 0;
    }


    PonerDigito(numero) {
        if (this.NumeroPantalla === '0')
            this.NumeroPantalla = numero;
        else {
            this.NumeroPantalla += numero;
        }
    }

    Calcular(operador) {

        let valor = parseFloat(this.NumeroPantalla);
        let rslt = parseFloat(this.Resultado);

        switch (this.Op) {
            case '+':
                rslt += valor;
                break;
            case '-':
                rslt -= valor;
                break;
            case '*':
                rslt *= valor;
                break;
            case '/':
                rslt /= valor;
                break;
            default:
                rslt = valor;
        }
        this.Op = operador;
        this.Resultado = rslt.toString();
        this.NumeroPantalla = '0';
    }

    limpiarPantalla() {
        this.NumeroPantalla = '0';
    }

    limpiarTodo() {
        this.NumeroPantalla = '0';
        this.Resultado = '0';
        this.Op = '+'
    }

    borrar() {
        if (this.NumeroPantalla.length > 1 && this.NumeroPantalla != '0')
            this.NumeroPantalla = this.NumeroPantalla.substring(0, this.NumeroPantalla.length - 1);
        else
            this.NumeroPantalla = 0;
    }

}

function calc() {
    let c = new Calculadora();
    let resultado = document.querySelector("#resultado");
    let pantalla = document.querySelector("#pantalla");
    let btCE = document.querySelector("#btCE");
    let btC = document.querySelector("#btC");
    let btBorrar = document.querySelector("#btBorrar");
    let btDividir = document.querySelector("#btDividir");
    let bt7 = document.querySelector("#bt7");
    let bt8 = document.querySelector("#bt8");
    let bt9 = document.querySelector("#bt9");
    let btMultiplicar = document.querySelector("#btMultiplicar");
    let bt4 = document.querySelector("#bt4");
    let bt5 = document.querySelector("#bt5");
    let bt6 = document.querySelector("#bt6");
    let btRestar = document.querySelector("#btRestar");
    let bt1 = document.querySelector("#bt1");
    let bt2 = document.querySelector("#bt2");
    let bt3 = document.querySelector("#bt3");
    let btSumar = document.querySelector("#btSumar");
    let btVacio = document.querySelector("#btVacio");
    let bt0 = document.querySelector("#bt0");
    let btComa = document.querySelector("#btComa");
    let btIgual = document.querySelector("#btIgual");

    let actualizarPantalla = () => {
        resultado.textContent = c.Resultado;
        pantalla.textContent = c.NumeroPantalla;
    }

    let clicarNumero = (ev) => {
        c.PonerDigito(ev.target.value);
        actualizarPantalla();
    }

    let clicarOperacion = (ev) => {
        c.Calcular(ev.target.value);
        actualizarPantalla();
    }


    bt0.addEventListener('click', clicarNumero);
    bt1.addEventListener('click', clicarNumero);
    bt2.addEventListener('click', clicarNumero);
    bt3.addEventListener('click', clicarNumero);
    bt4.addEventListener('click', clicarNumero);
    bt5.addEventListener('click', clicarNumero);
    bt6.addEventListener('click', clicarNumero);
    bt7.addEventListener('click', clicarNumero);
    bt8.addEventListener('click', clicarNumero);
    bt9.addEventListener('click', clicarNumero);
    btComa.addEventListener('click', (ev) => {
        if (c.NumeroPantalla.includes(','))
            return;
        else
            clicarNumero(ev);

    });

    btCE.addEventListener('click', () => {
        c.limpiarTodo();
        actualizarPantalla();
    })
    btC.addEventListener('click', () => {
        c.limpiarPantalla();
        actualizarPantalla();
    })
    btBorrar.addEventListener('click', () => {
        c.borrar();
        actualizarPantalla();
    })

    btSumar.addEventListener('click', clicarOperacion);
    btRestar.addEventListener('click', clicarOperacion);
    btMultiplicar.addEventListener('click', clicarOperacion);
    btDividir.addEventListener('click', clicarOperacion);
    btIgual.addEventListener('click', clicarOperacion);

    btVacio.addEventListener('click', ()=>{});
}


calc();