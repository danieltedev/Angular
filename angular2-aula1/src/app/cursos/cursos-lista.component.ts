import { Component } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
    selector: 'app-cursos-lista',
    /*template: `
        <h3>Olá, meu nome é {{ nome }}</h3>
        <ul>
            <li *ngFor="let curso of cursos">
                {{ curso }}
            </li>
        </ul>
    `*/
    templateUrl: './cursos-lista.component.html'
})
export class CursosListaComponent {

    nome = 'Daniel';

//    cursos = ['Angular 2', 'Java', 'ORM'];
    cursos;

    constructor(cursosService: CursosService) {
        this.cursos = cursosService.getCursos();
    }

}
