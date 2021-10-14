import { Component, OnInit } from '@angular/core';
import { CalculadoraComponent } from '../calculadora/calculadora.component';
import { ClienteFormularioComponent } from '../cliente-formulario/cliente-formulario.component';
import { ContactosModule } from '../contactos';
import { ContactosComponent } from '../contactos/componente.component';
import { ContactosViewModelService } from '../contactos/servicios.service';
import { DemosComponent } from '../demos/demos.component';
import { FormularioComponent } from '../formulario/formulario.component';
import { HomeComponent, NotificationComponent } from '../main';


@Component({
  selector: 'app-dinamico',
  templateUrl: './dinamico.component.html',
  styleUrls: ['./dinamico.component.scss']
})
export class DinamicoComponent implements OnInit {
  menu = [
    { texto: 'Contacto', icono: 'fas fa-address-book', componente: ContactosComponent},
    { texto: 'Formulario Cliente', icono: 'fas fa-user-tie', componente: ClienteFormularioComponent},
    { texto: 'formulario', icono: 'fas fa-user-tie', componente: FormularioComponent},
    { texto: 'inicio', icono: 'fas fa-home', componente: HomeComponent },
    { texto: 'demos', icono: 'fas fa-chalkboard-teacher', componente: DemosComponent },
    { texto: 'calculadora', icono: 'fas fa-calculator', componente: CalculadoraComponent },
  ];

  actual = this.menu[0].componente;

  constructor() { }

  seleccionar(indice: number): void {
    this.actual = this.menu[indice].componente;
  }

  ngOnInit(): void {
  }

}
