import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MyCoreModule } from 'src/lib/my-core';
import { CommonServicesModule } from '../common-services';
import { CONTACTOS_COMPONENTES } from './componente.component';
import { FormButtonsComponent } from '../common-component';
import { CommonComponentModule } from '../common-component/common-component.module';
import { NgxPaginationModule } from 'ngx-pagination';
import {PaginatorModule} from 'primeng/paginator';



@NgModule({
  declarations: [
    CONTACTOS_COMPONENTES,
  ],
  imports: [
    CommonModule, FormsModule, RouterModule.forChild([]),
    MyCoreModule, CommonServicesModule, CommonComponentModule, NgxPaginationModule, PaginatorModule
  ],
  exports:[
    CONTACTOS_COMPONENTES
  ]
})
export class ContactosModule { }
