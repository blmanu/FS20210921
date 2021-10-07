import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ClienteViewModel } from 'src/app/cliente-formulario/cliente-formulario.component';


@Component({
  selector: 'app-form-buttons',
  templateUrl: './form-buttons.component.html',
  styleUrls: ['./form-buttons.component.scss']
})
export class FormButtonsComponent implements OnInit {



  constructor(public vm: ClienteViewModel) { }

  @Output() send: EventEmitter<any> = new EventEmitter();
  @Output() cancel: EventEmitter<any> = new EventEmitter();
  @Input() IsVisible: boolean | null = false;

  ngOnInit(): void {
  }

}
