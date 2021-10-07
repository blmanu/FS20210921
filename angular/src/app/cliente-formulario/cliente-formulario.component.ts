import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { NotificationService, NotificationType } from '../common-services';
import {FormButtonsComponent, ShowErrorsMessagesComponent} from '../common-component'

export interface Cliente {
  codigo: number | null;
  nombre: string;
  apellidos: string;
  correo: string | null;
  direccion: string | null;
  tienda: string | null;
  dni: string | null;
  activo: boolean;
  fechaCreacion: string | null;
  ultimaModificacion: string | null;
}

@Injectable({ providedIn: 'root' })
export class ClienteViewModel {
  Listado: Array<Cliente> = [];
  Elemento: Cliente = {
    codigo: null,
    nombre: '',
    apellidos: '',
    correo: null,
    direccion: null,
    tienda: null,
    dni: null,
    activo: true,
    fechaCreacion: null,
    ultimaModificacion: null,
  };
  IsAdd = true;

  constructor(private notify: NotificationService) {}

  public list() {}

  public add() {
    this.Elemento = {
      codigo: null,
      nombre: '',
      apellidos: '',
      correo: null,
      direccion: null,
      tienda: null,
      dni: null,
      activo: true,
      fechaCreacion: null,
      ultimaModificacion: null,
    };
    this.IsAdd = true;
  }

  public edit() {
    this.Elemento = this.Listado[0];
    this.IsAdd = false;
  }

  public view() {
    this.Elemento = this.Listado[0];
    this.IsAdd = false;
  }

  public delete() {}

  public cancel() {
    alert("cancel");
    this.Elemento = {
      codigo: null,
      nombre: '',
      apellidos: '',
      correo: null,
      direccion: null,
      tienda: null,
      dni: null,
      activo: true,
      fechaCreacion: null,
      ultimaModificacion: null,
    };
  }

  public send() {
    alert("send");
    this.notify.add(
      (this.IsAdd ? 'Nuevos: ' : 'Modificados: ') +
        JSON.stringify(this.Elemento),
      NotificationType.info
    );
  }
}
@Component({
  selector: 'app-cliente-formulario',
  templateUrl: './cliente-formulario.component.html',
  styleUrls: ['./cliente-formulario.component.scss'],
})
export class ClienteFormularioComponent implements OnInit {
  constructor(public vm: ClienteViewModel) {}

  ngOnInit(): void {}
}
