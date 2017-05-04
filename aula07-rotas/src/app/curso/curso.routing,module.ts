import { NgModule } from "@angular/core";
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursoComponent } from './curso.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from "./curso-nao-encontrado/curso-nao-encontrado.component";

@NgModule({
    imports: [RouterModule.forChild(
        [
            { path: '', component: CursoComponent },
            { path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
            { path: ':id', component: CursoDetalheComponent }
        ]
    )],
    exports: [RouterModule]
})

export class CursoRoutingModule { }