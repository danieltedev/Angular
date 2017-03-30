import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CriarCursoComponent } from './criar-curso.component';
import { CurosoService } from '../shared/curoso.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CriarCursoComponent
  ],
  exports: [
    CriarCursoComponent
//  ],
//  providers: [
//    CurosoService
  ]
})
export class CriarCursoModule { }
