import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
// import { CursoComponent } from './curso/curso.component';
// import { routing } from './app.routing';
import { MaterializeModule } from 'angular2-materialize';
// import { CursoDetalheComponent } from './curso/curso-detalhe/curso-detalhe.component';
// import { CursoService } from "./curso/curso.service";
// import { CursoNaoEncontradoComponent } from './curso/curso-nao-encontrado/curso-nao-encontrado.component';
import { AppRoutingModule } from "./app.routing.module";
import { CursoModule } from "app/curso/curso.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent// ,
    // CursoComponent,
    // CursoDetalheComponent,
    // CursoNaoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CursoModule,
    AppRoutingModule
    // routing
  ],
  providers: [
    // CursoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
