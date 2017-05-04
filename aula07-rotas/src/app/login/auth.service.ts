import { Injectable, EventEmitter } from '@angular/core';
import { Router } from "@angular/router";

import { Usuario } from "app/login/usuario";

@Injectable()
export class AuthService {

  private usuarioAutenticado: boolean;

  mostarManuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario) {

    if(usuario.nome === 'usuario@email.com' &&
      usuario.senha === '123456') {
        this.usuarioAutenticado = true;
        this.mostarManuEmitter.emit(true);
        this.router.navigate(['/']);
      }else{
        this.usuarioAutenticado = false;
        this.mostarManuEmitter.emit(false);
      }
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }
}
