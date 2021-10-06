import { Component, OnDestroy, OnInit } from '@angular/core';
import { Unsubscribable } from 'rxjs';
import { NotificationService, NotificationType } from '../common-services';

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.scss'],
})
export class DemosComponent implements OnInit, OnDestroy {
  private nombre: string = 'mundo';
  private suscriptor: Unsubscribable | undefined;

  listado = [
    { id: 1, nombre: 'Madrid' },
    { id: 2, nombre: 'malaga' },
    { id: 3, nombre: 'SEVILLA' },
    { id: 4, nombre: 'ciudad real' },
  ];
  idProvincia = 0;

  resultado: string | null = null;
  visible = true;
  estetica = { importante: true, error: false, urgente: true };
  fontSize = 14;

  constructor(public vm: NotificationService) {}

  public get Nombre(): string {
    return this.nombre;
  }
  public set Nombre(value: string) {
    if (this.nombre === value) return;
    this.nombre = value;
  }

  public saluda(): void {
    this.resultado = `Hola ${this.nombre}`;
  }

  despide(): void {
    this.resultado = `Adiós ${this.nombre}`;
  }

  di(algo: string): void {
    this.resultado = `Dice ${algo}`;
  }

  cambia(): void {
    this.visible = !this.visible;
    this.estetica.importante = !this.estetica.importante;
    this.estetica.error = !this.estetica.error;
  }

  calcula(a: number, b: number): number {
    return a + b;
  }

  add(provincia: string): void {
    const id =
      this.listado.length === 0
        ? 1
        : this.listado[this.listado.length - 1].id + 1;
    this.listado.push({ id, nombre: provincia });
    this.idProvincia = id;
  }

  ngOnInit(): void {
    this.suscriptor = this.vm.Notificacion.subscribe((n) => {
      if (n.Type !== NotificationType.error) {
        return;
      }
      window.alert(`Suscripcion: ${n.Message}`);
      this.vm.remove(this.vm.Listado.length - 1);
    });
  }
  ngOnDestroy(): void {
    if (this.suscriptor) {
      this.suscriptor.unsubscribe();
    }
  }
}
