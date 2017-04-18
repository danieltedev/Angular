import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursoComponent } from './curso/curso.component';
import { CursoDetalheComponent } from './curso/curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from "./curso/curso-nao-encontrado/curso-nao-encontrado.component";

const APP_ROUTER: Routes = [
    { path: 'curso', component: CursoComponent },
    { path: 'curso-detalhe/:id', component: CursoDetalheComponent },
    { path: 'login', component: LoginComponent },
    { path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
    { path: '', component: HomeComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTER);
