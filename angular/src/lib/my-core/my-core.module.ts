import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SizerComponent } from './components/sizer.component';
import { PIPES_CADENAS } from './pipes/cadenas.pipe';
import { MyShowErrorsDirective } from './directives/my-show-errors.directive';



@NgModule({
  declarations: [
    SizerComponent,
    PIPES_CADENAS,
    MyShowErrorsDirective,
  ],
  exports: [
    SizerComponent, PIPES_CADENAS,
  ],
  imports: [
    CommonModule
  ]
})
export class MyCoreModule { }
