import { NgModule } from "@angular/core";
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursoComponent } from './curso.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from "./curso-nao-encontrado/curso-nao-encontrado.component";

@NgModule({
    imports: [RouterModule.forChild(
        [
            { path: 'curso', component: CursoComponent },
            { path: 'curso-detalhe/:id', component: CursoDetalheComponent },
            { path: 'naoEncontrado', component: CursoNaoEncontradoComponent }
        ]
    )],
    exports: [RouterModule]
})

export class CursoRoutingModule { }