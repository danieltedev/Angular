import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { AlunosComponent } from "./alunos.component";
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosRoutingModule } from "app/alunos/alunos.routing.module";
import { AlunosService } from "app/alunos/alunos.service";
import { AlunosGuard } from "app/guards/alunos.guard";
import { AlunosDeactivateGuard } from "app/guards/alunos-deactivate.guard";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AlunosRoutingModule
  ],
  declarations: [
    AlunosComponent,
    AlunoFormComponent,
    AlunoDetalheComponent
  ],
  providers: [
    AlunosService,
    AlunosGuard,
    AlunosDeactivateGuard
  ]
})
export class AlunosModule { }
