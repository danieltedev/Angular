import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-switch',
  templateUrl: './diretiva-switch.component.html',
  styleUrls: ['./diretiva-switch.component.css']
})
export class DiretivaSwitchComponent implements OnInit {

  aba: string = 'home';

  constructor() { }

  ngOnInit() {
  }

}
