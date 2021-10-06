import { Component, OnInit } from '@angular/core';
import { CalculadoraComponent } from '../calculadora/calculadora.component';
import { DemosComponent } from '../demos/demos.component';
import { HomeComponent, NotificationComponent } from '../main';


@Component({
  selector: 'app-dinamico',
  templateUrl: './dinamico.component.html',
  styleUrls: ['./dinamico.component.scss']
})
export class DinamicoComponent implements OnInit {
  menu = [
    { texto: 'notificacion', icono: '', componente: NotificationComponent},
    { texto: 'inicio', icono: '', componente: HomeComponent },
    { texto: 'demos', icono: '', componente: DemosComponent },
    { texto: 'calculadora', icono: '', componente: CalculadoraComponent },
  ];

  actual = this.menu[0].componente;

  constructor() { }

  seleccionar(indice: number): void {
    this.actual = this.menu[indice].componente;
  }

  ngOnInit(): void {
  }

}
