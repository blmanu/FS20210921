import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss'],
})
export class CalculadoraComponent implements OnInit {
  private numeroPantalla = '0';
  private op = '+';
  private resultadoPantalla = '0';
  private resultado = 0;

  constructor() {}

  get NumeroPantalla(): string {return this.numeroPantalla;}
  get ResultadoPantalla(): string{return this.resultadoPantalla;}

  PonerDigito(numero: string) {
    if (this.numeroPantalla === '0' && numero !== ',') {
      this.numeroPantalla = numero;
    } else {
      this.numeroPantalla += numero;
      //this.excedePantalla();
    }
  }

  ponerComa(){
    if (this.numeroPantalla.includes(','))
            return;
        else
            this.PonerDigito(',');

  }

  /*excedePantalla(){
    if(this.numeroPantalla.length > 7){
      let n = parseFloat(this.cambioPuntoComa(this.numeroPantalla)).toPrecision(3);
      console.log(n);
      this.numeroPantalla = n.toString();
    }
  }*/

  cambioComaPunto(cadena: string) {
    let c = cadena;
    if (c.includes(',')) return c.replace(',', '.');
    else return c;
  }

  cambioPuntoComa(cadena: string): string {
    let c = cadena;
    if (c.includes('.')) return c.replace('.', ',');
    else return c;
  }

  Calcular(operador: string) {
    let valor = parseFloat(this.cambioComaPunto(this.numeroPantalla));
    let rslt = this.resultado;

    switch (this.op) {
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
    }
    this.op = operador;
    this.resultado = rslt;
    this.resultadoPantalla = `${this.cambioPuntoComa(
      this.resultado.toString()
    )}`;
    if (this.op === '=') {
      this.numeroPantalla = `${this.cambioPuntoComa(
        this.resultado.toString()
      )}`;
      //this.excedePantalla();
    } else {
      if (this.op === '*') this.resultadoPantalla += ` x `;
      else this.resultadoPantalla += ` ${this.op} `;
      this.numeroPantalla = '0';
    }
  }

  limpiarPantalla() {
    this.numeroPantalla = '0';
  }

  limpiarTodo() {
    this.numeroPantalla = '0';
    this.resultado = 0;
    this.resultadoPantalla = '0';
    this.op = '+';
  }

  borrar() {
    if (this.numeroPantalla.length > 1 && this.numeroPantalla !== '0'){
      this.numeroPantalla = this.numeroPantalla.substring(
        0,
        this.numeroPantalla.length - 1
      );
      //this.excedePantalla();
    }

    else this.numeroPantalla = '0';
  }

  ngOnInit(): void {}
}
