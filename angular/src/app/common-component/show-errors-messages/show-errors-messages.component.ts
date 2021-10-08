import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-errors-messages',
  templateUrl: './show-errors-messages.component.html',
  styleUrls: ['./show-errors-messages.component.scss']
})
export class ShowErrorsMessagesComponent implements OnInit {

  mensaje: string = ''
  constructor() { }

  @Input() errors: any;

  mensajeError(){
    if(this.errors?.required) this.mensaje="Es obligatorio."
    else if(this.errors?.minlength && this.errors?.maxlength) this.mensaje=`Debe tener entre ${this.errors?.minlength?.minlength} y ${this.errors?.maxlength?.maxlength} letras`
    else if(this.errors?.min) this.mensaje=`Debe ser mayor que ${this.errors?.min?.min}`
    else if(this.errors?.email) this.mensaje="No es un correo electrónico valido"
    else this.mensaje='';
  }

  ngOnInit(): void {
  }

}
