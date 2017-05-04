import { Component } from '@angular/core';

import { AuthService } from "app/login/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  mostrarMenu: boolean;

  constructor(private authService: AuthService) {}

  ngOnInit(){
    this.authService.mostarManuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  }
}
