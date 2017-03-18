import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl } from '@angular/forms';

import { CursosComponent } from './cursos.component';
import { CursosDetalheComponent } from './cursos-detalhe/cursos-detalhe.component';
import { CursosService } from './cursos.service';
import { CursosListaComponent } from './cursos-lista.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CursosComponent,
    CursosDetalheComponent,
    CursosListaComponent
  ],
  exports: [
    CursosComponent,
    CursosListaComponent
  ],
  providers: [
    CursosService
  ]
})
export class CursosModule { }
