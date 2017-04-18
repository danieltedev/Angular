import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from "rxjs/Rx";

import { CursoService } from "../curso.service";

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  id: number;
  inscricao: Subscription;
  curso: any;

  constructor(
    private router: ActivatedRoute,
    private route: Router,
    private cursoService: CursoService
  ) { 
    // this.id = this.router.snapshot.params['id'];
    // console.log(this.router);
  }

  ngOnInit() {
    this.inscricao = this.router.params.subscribe(
      (params: any)=>{
        this.id = params['id'];
      }
    )

    this.curso = this.cursoService.getCurso(this.id);
    
    if(this.curso == null){
      this.route.navigate(['/naoEncontrado']);
    }
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
