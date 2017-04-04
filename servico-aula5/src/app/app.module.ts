import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';
import { CurosoService } from './shared/curoso.service';
import { CriarCursoModule } from './criar-curso/criar-curso.module';
import { LogService } from './shared/log.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CursosModule,
    CriarCursoModule
  ],
  providers: [
    LogService// ,
   // CurosoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
