import { Injectable } from "@angular/core";
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

import { AlunoFormComponent } from "app/alunos/aluno-form/aluno-form.component";
import { Observable } from "rxjs/Observable";


@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<AlunoFormComponent> {
        
        canDeactivate(
            component: AlunoFormComponent,
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
        ): Observable<boolean>|Promise<boolean>|boolean {
            console.log('guarda de desativação');
            
            return component.podeMudarRota();
    }
}
