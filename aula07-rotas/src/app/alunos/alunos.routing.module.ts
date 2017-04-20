
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AlunosComponent } from "app/alunos/alunos.component";
import { AlunoDetalheComponent } from "app/alunos/aluno-detalhe/aluno-detalhe.component";
import { AlunoFormComponent } from "app/alunos/aluno-form/aluno-form.component";

const aulunosRoutes = [
    {path: 'alunos', component: AlunosComponent, children: [
        {path: 'novo', component: AlunoFormComponent},
        {path: ':id', component: AlunoDetalheComponent},
        {path: ':id/editar', component: AlunoFormComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(aulunosRoutes)],
    exports: [RouterModule]
})
export class AlunosRoutingModule {

}