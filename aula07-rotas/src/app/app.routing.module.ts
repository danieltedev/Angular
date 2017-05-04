import { NgModule } from "@angular/core";
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from "app/guards/auth.guard";
import { CursosGuard } from "app/guards/cursos.guard";
import { AlunosGuard } from "app/guards/alunos.guard";
// import { CursoComponent } from './curso/curso.component';
// import { CursoDetalheComponent } from './curso/curso-detalhe/curso-detalhe.component';
// import { CursoNaoEncontradoComponent } from "./curso/curso-nao-encontrado/curso-nao-encontrado.component";

@NgModule({
    imports: [RouterModule.forRoot(
        [
            { 
                path: 'curso',
                loadChildren: 'app/curso/curso.module#CursoModule',
                canActivate: [AuthGuard],
                canActivateChild: [CursosGuard]
            },
            {
                path: 'alunos',
                loadChildren: 'app/alunos/alunos.module#AlunosModule',
                canActivate: [AuthGuard]// ,
                // canActivateChild: [AlunosGuard]
            },
            // { path: 'curso', component: CursoComponent },
            // { path: 'curso-detalhe/:id', component: CursoDetalheComponent },
            {
                path: 'login',
                component: LoginComponent
            },
            // { path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
            {
                path: '',
                component: HomeComponent,
                canActivate: [AuthGuard]
            }
        ]
    )],
    exports: [RouterModule]
})
export class AppRoutingModule { }