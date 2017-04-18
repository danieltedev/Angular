import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { CursoComponent } from "app/curso/curso.component";
import { CursoDetalheComponent } from "app/curso/curso-detalhe/curso-detalhe.component";
import { CursoNaoEncontradoComponent } from "app/curso/curso-nao-encontrado/curso-nao-encontrado.component";
import { CursoService } from "app/curso/curso.service";
import { CursoRoutingModule } from "app/curso/curso.routing,module";

@NgModule({
  imports: [
    CommonModule,
    CursoRoutingModule
    // RouterModule
  ],
  declarations: [
    CursoComponent,
    CursoDetalheComponent,
    CursoNaoEncontradoComponent
  ],
  providers: [CursoService]
})
export class CursoModule { }
