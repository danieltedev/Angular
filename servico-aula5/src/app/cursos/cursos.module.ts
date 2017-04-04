import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CurosoService } from '../shared/curoso.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CursosComponent
  ],
  exports: [
    CursosComponent
  ],
  providers: [
    CurosoService
  ]
})
export class CursosModule { }
