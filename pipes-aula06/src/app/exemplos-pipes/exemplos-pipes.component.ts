import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any;
  livros: string[];
  filtro: string;
  valorAsync = new Promise((resolve, reject)=>{
    setTimeout(()=>resolve('Valor assíncrono'), 2000)
  });
  valorAsync2 = Observable.interval(2000)
    .map(valor => 'Valor assíncrono 2')

  constructor() {
    this.livro = {
      titulo: 'Como fazer amigos e influencia pessaos',
      rating: 4.54321,
      numeroPaginas: 314,
      preco: 44.99,
      dataLancamento: new Date(2016, 5, 3),
      url: 'http://a.co/glqjpRP'
    }
    this.livros = ['Java','Angular'];
  }

  addCurso(valor) {
    this.livros.push(valor);
    console.log(this.livros);
  }

  obterCursos() {
    if(this.livros.length === 0
    || this.filtro === undefined
    || this.filtro.trim() === ''){
      return this.livros;
    }

    return this.livros.filter((v) => {
      if(v.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0){
        return true;
      }
      return false;
    });
  }

  ngOnInit() {
  }

}
