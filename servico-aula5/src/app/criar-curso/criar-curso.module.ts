import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CriarCursoComponent } from './criar-curso.component';
import { CurosoService } from '../shared/curoso.service';
import { ReceberCursoCriadoComponent } from '../receber-curso-criado/receber-curso-criado.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CriarCursoComponent,
    ReceberCursoCriadoComponent
  ],
  exports: [
    CriarCursoComponent
  ],
  providers: [
    CurosoService
  ]
})
export class CriarCursoModule { }
